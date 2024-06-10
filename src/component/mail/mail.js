import emailjs from '@emailjs/browser'

const sendCustomerEmail = async (details) => {
    emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
    return emailjs
        .send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            {
                from_name: details.to_email,
                to_name: details.subject,
                message: details.message,
            }
        )
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.log('Error sending email:', err);
            return err;
        });
};

export { sendCustomerEmail };
