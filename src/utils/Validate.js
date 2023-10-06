export const checkvalidate =(email,password ) =>{
    const isemailvalid= /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const ispasswordvalid= /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)

    if(!isemailvalid) return "Email is not valid" ;
    if(!ispasswordvalid) return "password is not valid ";

    return null;

}