const express = require('express')
const router = express.Router()
 const Message = require('../model/Message')
 const Conversation = require('../model/Conversation')
 const mongoose = require('mongoose')



 // Token verfication middleware


 // Get conversation list
router.get('/conversation', async (req, res) => {
    console.log("Get Route worked")
    let fromUser= mongoose.Types.ObjectId(User.id)
    Conversation.aggregate([
        {
            //aggregate() method and db.aggregate() method, pipeline stages appear in an array. Documents pass through the stages in sequence.
            $lookup: {
                from: 'users',
                localField: 'participants',
                foreignField: '_id',
                as: 'participantsObj',
            },
        },
    ])
        // The $elemMatch operator matches documents that contain an array field with at least one element that matches all the specified query criteria.
        //$eq = equality 

        .match({ participants: { $all: [{ $elemMatch: { $eq: fromUser } }] } })
        .project({
            // project fields are booleans, (true or 1)means include field in the (match), while (false or 0), means exclude these particular fields all but the specified fields
            'participantsObj.password': 0,
            'participantsObj.__v': 0,
            'participantsObj.date': 0,
            'participantsObj.avatar':0,
            'participantsObj.birthDate':0,
            'participantsObj.registrationDate':0,
            'participantsObj.address':0,
            'participantsObj.phoneNumber':0,
            'participantsObj.email':0,
            'participantsObj.genderIdentity':0,
            'participantsObj.specialty':0,
            'participantsObj.practiceType':0,
            'participantsObj.activeStatus':0,
            'participantsObj.cpsaStanding':0,
        
        })
            //.exec is an operator that is part of the aggregate method of (MongoDB/Mongoose). It is a callback function, that is returns a promise and is 
        .exec((err, conversations) => {
            if (err) {
                console.log(err);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ message: 'Failure' }));
                res.sendStatus(500);
            } else {
                res.send(conversations);
                console.log("what is conversation", conversations)
            }
        });
});
 
// Get messages from conversation
// based on toUser & fromUser
router.get('/conversations/query', (req, res) => {
    console.log("what is req.query", req.query)
    let user1 = mongoose.Types.ObjectId(User.id);
    let user2 = mongoose.Types.ObjectId(req.query.userId);
    Message.aggregate([
        {
            $lookup: {
                from: 'users',
                localField: 'toUser',
                foreignField: '_id',
                as: 'toUserObj',
            },
        },
        {
            $lookup: {
                from: 'users',
                localField: 'fromUser',
                foreignField: '_id',
                as: 'fromUserObj',
            },
        },
    ])
        .match({
            $or: [
                { $and: [{ to: user1 }, { from: user2 }] },
                { $and: [{ to: user2 }, { from: user1 }] },
            ],
        })
        .project({
            'toObj.password': 0,
            'toObj.__v': 0,
            'toObj.date': 0,
            'toUserObj.avatar':0,
            'toUserObj.birthDate':0,
            'toUserObj.registrationDate':0,
            'toUserObj.address':0,
            'toUserObj.phoneNumber':0,
            'toUserObj.email':0,
            'ptoUserObj.genderIdentity':0,
            'toUserObj.specialty':0,
            'toUserObj.practiceType':0,
            'toUserObj.activeStatus':0,
            'fromObj.password': 0,
            'fromObj.__v': 0,
            'fromObj.date': 0,
            'fromUserObj.avatar':0,
            'fromUserObj.birthDate':0,
            'fromUserObj.registrationDate':0,
            'fromUserObj.address':0,
            'fromUserObj.phoneNumber':0,
            'fromUserObj.email':0,
            'fromUserObj.genderIdentity':0,
            'fromUserObj.specialty':0,
            'fromUserObj.practiceType':0,
            'fromUserObj.activeStatus':0,
        })
        .exec((err, messages) => {
            if (err) {
                console.log(err);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ message: 'Failure' }));
                res.sendStatus(500);
            } else {
                res.send(messages);
                console.log("what is messages", messages)
            }
        });
});


// Post private message
router.post('/', (req, res) => {
    console.log('what is req.body', req.body)
    let fromUser = mongoose.Types.ObjectId(User.id);
    let toUser = mongoose.Types.ObjectId(req.body.to);
    console.log("what is toUser?", toUser)

    Conversation.findOneAndUpdate(
        {
            participants: {
                $all: [
                    { $elemMatch: { $eq: fromUser } },
                    { $elemMatch: { $eq: toUser } },
                ],
            },
        },
        {
            participants: [User.id, req.body],
            lastMessage: req.body,
            date: Date.now(),
        },
        { upsert: true, new: true, setDefaultsOnInsert: true },
        function(err, conversation) {
            if (err) {
                console.log(err);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ message: 'Failure' }));
                res.sendStatus(500);
            } else {
                let message = new Message({
                    conversation: conversation._id,
                    toUser: req.body.toUser,
                    fromUser: User.id,
                    text: req.body.text,
                });

                req.io.sockets.emit('messages', req.body.text);

                message.save(err => {
                    if (err) {
                        console.log(err);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify({ message: 'Failure' }));
                        res.sendStatus(500);
                    } else {
                        console.log("what is conversationId?", conversation._Id),
                        res.setHeader('Content-Type', 'application/json');
                        res.end(
                            JSON.stringify({
                                message: 'Success',
                                conversationId: conversation._id,
                            })
                        );
                    }
                });
            }
        }
    );
});





// router.get('/', async (req, res) => {
//     let conversation = await message.find({})
//     res.send(conversation)    
// })

// router.post('/', async (req, res) => {
//     let messageToCreate = req.body
//     console.log("create new conversation",messageToCreate )
//     let newMessage = new Message(messageToCreate)
//     await newMessage.save()
//     console.log("what is newMessage", newMessage)
//     res.status(200).end()
// })

module.exports = router