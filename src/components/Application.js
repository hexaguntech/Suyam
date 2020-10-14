import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35
    },
    address:{
        display:`flex`,
         justifyContent:`center`,
         alignItems:`center`,
         flexDirection:`column`,
         paddingBottom:`7px`,
         fontSize: `9`,
         fontFamily:`Times-Roman`
    }
})

export function Application({ course,name,dob,gender,email,phone,addressLine1,addressLine2,state,pincode,bloodGroup,studied,studying,additionalQualification,working,verticalReservation,horizontalReservation,photoLink }){
    return(
        <Document>
            <Page style={styles.page}>
               { 
               <View>
                   <View style={styles.address}>
                    <Image source="assets/suyamheaderlogo.jpg" style={{ width: `125px`,height:`35px`,marginBottom:`5px`}} />
                    <Text style={styles.address}>“Thirukudil”, 14, First Cross, Natesan Nagar – East, Puducherry – 605 005.</Text>
                    <Text style={styles.address}>www.suyamias.com / +91-9486204334 / suyamias@gmail.com</Text>
                   </View>
                   <Text style={{fontSize: `20`,textAlign: 'center'}}>My Application</Text>
                    <Image
                        source={photoLink}
                        style={{ width:`100px`, height:`120px`,marginTop:`15px`,marginBottom:`20px`}}
                    />
                    <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman'}} > I opted for the course {course}</Text>
                    <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman'}}> My name is {name} </Text>
                    <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman'}}> I was born on {dob} </Text>
                    <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman'}}> Gender: {gender} </Text>
                    <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman'}}> My Address is {addressLine1}, {addressLine2},{' '}
                    {state}, {pincode}. </Text>
                    <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman'}}> My Mobile No. is {phone} </Text>
                    <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman'}}> My E-mail ID is {email} </Text>
                    <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman'}}> My Blood Group {bloodGroup} </Text>
                    <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman'}}> I studied {studied} </Text>
                    <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman'}}> My Additional qualifications are {additionalQualification} </Text>
                    <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman'}}> I am now Studying {studying} </Text>
                    <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman'}}> I am now working {working} </Text>
                    <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman'}}> I belong to (category for Vertical Reservation)  {verticalReservation} </Text>
                    <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman'}}> I am a / an (category for Horizontal Reservation) {horizontalReservation} </Text>
                    <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman'}}>  I assure that I will put in utmost perseverance,
                      preparation and performance while looking forward to
                      intellectual, academic, material and moral support from
                      the organizers/ faculty of the Coaching Programme. I
                      clearly understand that only upon payment of course fee,
                      my admission will be confirmed. I clearly understand that
                      fees once paid will not be refunded under any
                      circumstances. </Text>
                    <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman', textAlign:`justify`}}> I clearly understand that only upon payment of course fee, my admission will be confirmed. </Text>
                    <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman',textAlign:`justify`}}> I clearly understand that fees once paid will not be refunded under any circumstances. </Text>
                    <Text style={{margin: 5,fontSize: 14,textAlign: `justify`,fontFamily: 'Times-Roman'}}> {name}</Text>
                    <View style={{backgroundColor:`red`,width:`100%`,height:`2px`,marginTop:`10px` }}></View>
                    <View style={{marginTop: `10px`}}>
                        <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman',textAlign:`justify`}}>Dear {name}, </Text>
                        <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman',textAlign:`justify`}}>On confirmation of fees payment made by you, Payment Receipt and Login credentials for the course through “Suyam IAS” Mobile App will be sent through e-Mail / SMS: </Text>
                        <Text style={{margin: 4,fontSize: 13,textAlign: 'justify',fontFamily: 'Times-Roman',textAlign:`justify`}}>(SUYAM ADMINISTRATION)</Text>
                    </View>
                </View>}
            </Page>
        </Document>
    );

}

