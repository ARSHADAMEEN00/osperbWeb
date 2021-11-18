import React from 'react'
import '../technology/technology.css'
function ContactUs() {
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="contact-form__container">
                        <h2
                            id="w-node-_7333dce2-03a2-dff0-718f-0ecea8c2306d-a8c2306c"
                            className="contact-form__heading"
                        >
                            Need More Details?
                        </h2>
                        <div
                            id="w-node-_7333dce2-03a2-dff0-718f-0ecea8c2306f-a8c2306c"
                            className="form-block w-form"
                        >
                            <form
                                id="wf-form-Contact-us-form-CTA-section"
                                name="wf-form-Contact-us-form-CTA-section"
                                data-name="Contact us form — CTA section"
                                className="contact-form__wrap w-node-_7333dce2-03a2-dff0-718f-0ecea8c23070-a8c2306c"
                            >


                                <div
                                    id="w-node-_7333dce2-03a2-dff0-718f-0ecea8c23080-a8c2306c"
                                    className="contact-form__input-wrap"
                                >
                                    <label for="Name-3" className="input__label">
                                        Phone no
                                    </label>
                                    <input
                                        type="text"
                                        className="input w-input"
                                        maxlength="256"
                                        name="Name"
                                        data-name="Name"
                                        placeholder=""
                                        id="field"
                                        required=""
                                    />
                                </div>
                                <div
                                    id="w-node-_7333dce2-03a2-dff0-718f-0ecea8c23084-a8c2306c"
                                    className="contact-form__input-wrap"
                                >
                                    <label for="Email" className="input__label">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        className="input w-input"
                                        maxlength="256"
                                        name="Email"
                                        data-name="Email"
                                        placeholder=""
                                        id="field"
                                        required=""
                                    />
                                </div>
                                <div
                                    id="w-node-_7333dce2-03a2-dff0-718f-0ecea8c23088-a8c2306c"
                                    className="contact-form__input-wrap"
                                >
                                    <label for="How-we-can-help-you" className="input__label">
                                        How we can help you?
                                    </label>
                                    <textarea
                                        name="How-we-can-help-you"
                                        maxlength="5000"
                                        data-name="How we can help you?"
                                        required=""
                                        id="field"
                                        placeholder="Message"
                                        className="input text-field w-input"
                                    ></textarea>
                                </div>
                                <BlueButton />
                                <div
                                    id="w-node-_63016b9a-cc79-4f82-c4cb-1ad496f2af72-a8c2306c"
                                    className="contact-form__input-wrap"
                                >
                                    <div className="contact-form__phone">+91 095263 30055</div>
                                    <a
                                        href="mailto:sales@coaxsoft.com"
                                        className="contact-form__email"
                                    >
                                        sales@coaxsoft.com
                                    </a>
                                </div>
                            </form>
                            <div className="form__success-wrap w-form-done">
                                <div className="form__success-text">
                                    Thank you! Your submission has been received!
                                </div>
                            </div>
                            <div className="form__error-wrap w-form-fail">
                                <div className="form__error-text">
                                    Oops! Something went wrong while submitting the form.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs;

export const BlueButton = () => {
    return (
        <div
            id="w-node-a1127647-01e6-b48c-f007-73d7c25fc5af-a8c2306c"
            className="contact-form__input-wrap"
        >
            <button
                type="submit"
                data-wait="Please wait..."
                className="button-primary submit-button w-button"
                style={{ backgroundColor: "#1781bb" }}
            >
                Send Message
            </button>
        </div>
    )
}