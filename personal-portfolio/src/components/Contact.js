
import  { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
    const [formState, setFormState] = useState({});
    const [buttonText, setButtonText] = useState('Gönder');
    const [status, setStatus] = useState({});

    const changeHandler = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value});
    }

   const submitHandler =(event) => {
    event.preventDefault();
    setButtonText('Gönderiliyor...');
    const config = {
        SecureToken: "e41c4178-07f2-4451-9250-99aa85ffef14",
        To : "ahmetoguzhanengin@yopmail.com",
        From : "ahmetoguzhanengin@gmail.com",
        Subject : "İletişim için gelen mesajlar",
        Body :  `${formState.name}`+" "+`${formState.surname}`+" size bir mesaj gönderdi." +" GÖNDEREN MAİLİ :"+`${formState.email}` +" MESAJ İÇERİĞİ: "+ `${formState.description}`+ " TELEFON NUMARASI: "+`${formState.phone}`,
    };

    if(window.Email){
        window.Email.send(config).then(() => {
     
            setStatus({ success: true, message: 'Mesaj başarılı bir şekilde gönderildi!'});
            setButtonText("Gönder"); 
            
        
        }
    
    );
    }    
   };
   
 return (
        <section className="contact" id ="connect">
         <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src = {contactImg} alt="Contact Us"/>    
                </Col> 
                <Col md={6}>
                <h2> İletişime  Geçin</h2> 
                <form onSubmit = {submitHandler}> 
                    <Row>
                        <Col sm={6} className="px-1">
                            <input type = "text" name="name" value = {formState.name || "" } placeholder="Adınız" onChange={changeHandler}/>
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type = "text" name="surname" value = {formState.surname || "" }  placeholder="Soyadınız" onChange={changeHandler}/>
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type = "email"  name="email" value = {formState.email || "" }  placeholder="Mail Adresiniz" onChange={changeHandler}/>
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type = "tel" name="phone" value = {formState.phone || "" }  placeholder="Telefon Numaranız" onChange={changeHandler}/>
                        </Col>
                        <Col>
                            <textarea row = "6" name ="description" value = {formState.description || "" }  placeholder = "Mesajınız" onChange={changeHandler}></textarea>
                            <button type ="submit">{buttonText}</button>
                            <br/>
                            <br/>
                            {
                                status.message &&
                                <Col>
                                  <p className={status.success === false ? "danger" : "info"}>{status.message}</p>
                                </Col>
                              }
                        </Col>
                     
                    </Row>
                </form>
            </Col> 
            </Row>
         </Container>
        </section>


 );
};
/*const Contact = () => {
    const  formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''

    }
   
    
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Gönder');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Gönderiliyor...');
     
        let response = await fetch("http://localhost:3000/#connect", {
        method: "Post",
        headers: {
            "Content-Type" : "Application/json; charset=utf-8",
        },
        body: JSON.stringify(formDetails),
        });
        setButtonText("Gönder");
        let result = response.json();
        setFormDetails(formInitialDetails);
        const config ={
            SecureToken: 'c0728c08-bb28-401f-8ab1-32e5103cf6a5',
            To : 'ahmetoguzhanengin@yopmail.com',
            From : formDetails.email,
            Subject : `${formDetails.firstName+" " + formDetails.lastName+ "size bir mesaj gönderdi!" +formDetails.phone}`,
            Body : formDetails.message
        }
        config();
 
        if (result.code === 200){
            setStatus({ success: true, message: 'Mesaj başarılı bir şekilde gönderildi!'});
        }else{
            setStatus({ success: false, message: 'Bir şeyler ters gitti. Lütfen daha sonra tekrar deneyiniz!'});
        }
    }*/