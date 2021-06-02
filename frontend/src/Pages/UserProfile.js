import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const userId = localStorage.getItem("user");
fetch(`/api/user/getById/${userId}`);
