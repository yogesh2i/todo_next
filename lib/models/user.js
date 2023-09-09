import mongoose from "mongoose";

const dataModel =  new mongoose.Schema({
   contact:{
     email: String,
     phone : mongoose.Schema.Types.Mixed,
     whatsApp: mongoose.Schema.Types.Mixed
   },
   testimonials:[
    {
        name: String,
        personInfo: String,
        view: String
    }
   ]
});

export const Data = mongoose.models.companyData || mongoose.model("companyData",dataModel);