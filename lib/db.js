const {db,dbpass} = process.env;

export const connectionString = "mongodb+srv://"+db+":"+dbpass+"@cluster0.lskl2sb.mongodb.net/empyreal?retryWrites=true&w=majority"
