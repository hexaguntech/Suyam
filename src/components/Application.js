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
        backgroundColor: "#ffffff"
    }
})

export function Application({ course,name,dob,gender,email,phone,addressLine1,addressLine2,state,pincode,bloodGroup,studied,studying,additionalQualification,working,verticalReservation,horizontalReservation }){
    return(
        <Document>
            <Page style={styles.page}>
               { <View>
                    <Text> I opted for the course {course} </Text>
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
                    <Text>  I assure that I will put in utmost perseverance,
                      preparation and performance while looking forward to
                      intellectual, academic, material and moral support from
                      the organizers/ faculty of the Coaching Programme. I
                      clearly understand that only upon payment of course fee,
                      my admission will be confirmed. I clearly understand that
                      fees once paid will not be refunded under any
                      circumstances. </Text>
                    <Text> I clearly understand that only upon payment of course fee, my admission will be confirmed. </Text>
                    <Text>  clearly understand that fees once paid will not be refunded under any circumstances. </Text>
                </View>}
            </Page>
        </Document>
    );

}

