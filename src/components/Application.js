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
        padding: `40px`,
        textAlign: `left`,
        fontSize:`small`
    }
})

export function Application({ course,name,dob,gender,email,phone,addressLine1,addressLine2,state,pincode,bloodGroup,studied,studying,additionalQualification,working,verticalReservation,horizontalReservation,photoLink }){
    return(
        <Document>
            <Page style={styles.page}>
               { 
               <View>
                   <Image source="assets/suyamheaderlogo.jpg" style={{width: `200px`,height:`100px`,display: `flex`, paddingLeft:`100px`}} />
                   <Text style={{display:`flex`, justifyContent:`center`, textAlign: `center`}} >“Thirukudil”, 14, First Cross, Natesan Nagar – East, Puducherry – 605 005.</Text>
                   <Text style={{display:`flex`, justifyContent:`center`, textAlign: `center`}}>www.suyamias.com / +91-9486204334 / suyamias@gmail.com</Text>
                   <Text style={{paddingBottom: `30px`,paddingBottom: `10px`,textAlign: `center`}}>My Application</Text>
                    <Image
                        source={photoLink}
                        style={{ width:`100px`, height:`150px`,marginTop:`20px`,marginBottom:`20px`}}
                    />
                    <Text> I opted for the course {course}</Text>
                    <Text> My name is {name} </Text>
                    <Text> Gender: {gender} </Text>
                    <Text> My Address is {addressLine1}, {addressLine2},{' '}
                    {state}, {pincode}. </Text>
                    <Text> My Mobile No. is {phone} </Text>
                    <Text> My E-mail ID is {email} </Text>
                    <Text> My Blood Group {bloodGroup} </Text>
                    <Text> I studied {studied} </Text>
                    <Text> My Additional qualifications are {additionalQualification} </Text>
                    <Text> I am now Studying {studying} </Text>
                    <Text> I am now working {working} </Text>
                    <Text> I belong to (category for Vertical Reservation)  {verticalReservation} </Text>
                    <Text> I am a / an (category for Horizontal Reservation) {horizontalReservation} </Text>
                    <Text style={{textAlign:`justify`}}>  I assure that I will put in utmost perseverance,
                      preparation and performance while looking forward to
                      intellectual, academic, material and moral support from
                      the organizers/ faculty of the Coaching Programme. I
                      clearly understand that only upon payment of course fee,
                      my admission will be confirmed. I clearly understand that
                      fees once paid will not be refunded under any
                      circumstances. </Text>
                    <Text style={{ textAlign:`justify`}}> I clearly understand that only upon payment of course fee, my admission will be confirmed. </Text>
                    <Text style={{ textAlign:`justify`}}> I clearly understand that fees once paid will not be refunded under any circumstances. </Text>
                </View>}
            </Page>
        </Document>
    );

}

