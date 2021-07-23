function ContactDetails({ name, address1, address2, country, phone, email }) {
    return (
        <div>
            <p className="m-0">{name}</p>
            <p className="m-0">{address1}</p>
            <p className="m-0">{address2}</p>
            <p className="m-0">{country}</p>
            <p className="m-0">{phone}</p>
            <p className="m-0">{email}</p>
        </div>
    )
}

export default ContactDetails