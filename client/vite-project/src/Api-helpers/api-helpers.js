import axios from 'axios'

// For Getting All Foods From Server.
export const getAllFood = async () => {
    const res = await axios.get("/food")
     .catch((err) => console.log(err));

     if(res.status !== 200){
        return console.log("No Data");
     }
     const data = await res.data;
     return data;
};

// User Login and Signup.
export const sendUserAuthRequest = async (data, signup) => {
    const res = await axios.post(`/user/${signup ? "signup" : "login"}`, {
       name: signup ? data.name: " ",
       email: data.email,
       password: data.password
    })
    .catch((err)=> alert("Invalid username or password"));
    if(res.status !== 200 && res.status !== 201){
      console.log("unexpected Error Occured");
    }
    const resData = await res.data;
    return resData;
  }
// Admin Login Authentication.
export const sendAdminAuthRequest = async (data) => {
    const res = await axios.post("admin/login",{
        email : data.email,
        password : data.password
    })
    .catch((err) => alert("Invalid username or password"));
    if(res.status !== 200){
        return console.log("Unexpected Error Occured");
    }
    const resData = await res.data;
    return resData;
}

// Getting Each Food Details.
export const getFooddetails = async (id) =>{
    const res = await axios.get(`/food/${id}`).catch((err)=>{
        console.log(err);
    })
    .catch((err) => {console.log(err)});
    if(res.status !== 200){
        return console.log("Unexpected Error");
    }
    const resData = await res.data;
    return resData;
};

// Booking of Food.
export const newBooking = async (data) => {
    try {
        const res = await axios.post('/booking', {
            food: data.food,
            address: data.address,
            time: data.time,
            user: localStorage.getItem("userId")
        });
        
        console.log(data, localStorage.getItem("userId"));

        if (res.status !== 201) {
            console.log("unexpected Error");
            return null; // or handle the error as needed
        }
        
        const resData = await res.data;
        return resData;
    } catch (err) {
        console.log(err.message);
        // Handle specific error cases if needed
        return null;
    }
}

// Get Bookings of User.
export const getUserBooking = async() => {
    const id = localStorage.getItem("userId");
    console.log(id);
    const res = await axios.get(`/user/booking/${id}`)
    .catch((err) => {console.log(err)});
    if(res.status !== 200){
        console.log("Unexpected Error");
    }
    const resData = await res.data;
    return resData;
}

// Delete User Booking.
export const deleteBooking = async(id) => {
    const res = await axios.delete(`/booking/${id}`)
    .catch((err)=> {console.log(err)});
    if(res.status !== 200){
        console.log("Unexpected Error");
    }
    const resData = await res.data;
    return resData;
}

// Getting details of a User.
export const getUserDetails = async() => {
    const id = localStorage.getItem("userId");
    const res = await axios.get(`/user/${id}`)
    .catch((err) => console.log(err));

    if(res.status !== 200){
        return console.log("unexpected Error");
    }
    const resData = await res.data;
    console.log(resData);
    return resData;
}

// Adding Food By Admin.
export const addFood = async(data) => {
    const res = await axios.post('/food',{
        title : data.title,
        description : data.description,
        price : data.price,
        posterUrl : data.posterUrl,
        admin : localStorage.getItem('adminId')
    }, {
        headers : {
            Authorization : `Bearer ${localStorage.getItem("token")}`
        }
    })
    .catch((err)=> {
        console.log(err);
    })
    if(res.status !== 201){
        return console.log("Unexpected Error");
    }
    const resData = await res.data;
    return resData;
}

// Getting Details of a Admin.
export const getAdminById = async () => {
    const id = localStorage.getItem("adminId");
    const res = await axios.get(`/admin/${id}`)
    .catch((err) => console.log(err));
    
    if(res.status !== 200){
        return console.log("Unxpected Error");
    }
    const resData = await res.data;
    return resData;
} 

