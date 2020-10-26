import FormField from "./FormField";
import React from "react";


const BillingDetailsFields = () => {
    return (
        <>
            <FormField
                name="name"
                label="Name"
                type="text"
                placeholder="Jane Doe"
                required
            />
            <FormField
                name="email"
                label="Email"
                type="email"
                placeholder="jane.doe@example.com"
                required
            />
            <FormField
                name="address"
                label="Address"
                type="text"
                placeholder="Vestagatan 2"
                required
            />
            <FormField
                name="city"
                label="City"
                type="text"
                placeholder="Gothenburg"
                required
            />
            <FormField
                name="country"
                label="Country"
                type="text"
                placeholder="Sweden"
                required
            />
            <FormField
                name="zip"
                label="ZIP"
                type="text"
                placeholder="41664"
                required
            />
        </>
    );
};

export default BillingDetailsFields;