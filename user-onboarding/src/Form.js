import { HeadingStyledDiv, BodyStyledDiv} from "./Styles"

function change (e) {

}

function Terms(props) {

    const { formValues, setFormValues, termsSet, setTermsSet} = props
    
    return (
        <>
        <HeadingStyledDiv>
            <div id="mainHeading">
            <h1>Terms And Conditions: </h1>
            <span>
            </span>
            <p>Read through here.</p>
            </div>
        </HeadingStyledDiv>
        <BodyStyledDiv>
        <h1>Form Laboratories Inc. Terms of Service (But Who Reads This Anyway?)</h1>
        <p>Welcome to Form Laboratories Inc., where we promise to take your data and make it disappear into the mysterious void of the interwebs! Please take a moment to read our hilarious terms of service, though we doubt you'll get through it without chuckling.</p>

        <h1>Data Collection</h1>
        <p>We collect more data than the number of cups of coffee we've had today! Your name, email, favorite ice cream flavor, and your secret crush (Oops! Our bad.) — we'll take it all and stash it in our top-secret data vault (Okay, not so secret, but shh!).</p>

        <h1>Data Usage</h1>
        <p>Once we have your data, we'll do... well, nothing! Seriously, we don't have time to peek into your life when we're busy watching cat videos. We might use your data to improve our algorithms, but we can't guarantee it won't accidentally end up in a game of digital ping-pong.</p>

        <h1>Cookies &amp; Tracking</h1>
        <p>Yes, we have cookies. No, not the chocolate chip kind (unfortunately). These are digital bits that help us stalk... err, track your activities on our website. We use them to see how much time you waste... um, spend exploring our site.</p>

        <h1>Security Measures</h1>
        <p>Our security is top-notch! We use state-of-the-art tools like "Post-it Note Encryption" and "Password: 123456" to keep your data safe (Disclaimer: Not really, but it sounds cool, right?).</p>

        <h1>User Responsibilities</h1>
        <p>As a user, you agree to never take our terms too seriously. If you find a loophole, please let us know so we can close it and reward you with unlimited virtual high-fives.</p>

        <h1>Third-Party Shenanigans</h1>
        <p>We may team up with third-party services, but we promise not to let them throw wild parties with your data. They'll just be using it for... research, yeah, that's it.</p>

        <h1>Termination of Service</h1>
        <p>If we ever decide to part ways (sniff), we promise to delete your data faster than you can say "Form Laboratories Inc. is awesome!"</p>

        <h1>Contact Us</h1>
        <p>Need to reach us? You can send us a message via carrier pigeon or smoke signals, but we recommend sticking to the good old contact form. Just know that we might reply in emojis!</p>

        <h1>Conclusion</h1>
        <p>We hope you've had a good laugh reading this 'Terms of Service' that nobody reads. By using Form Laboratories Inc., you agree to be part of our quirky community, where we value humor, creativity, and, most importantly, not taking things too seriously. Enjoy your stay!</p>

        <p>Remember, this is all in good fun and should not be taken as an actual legal agreement. Now go forth and create awesome React apps with a smile on your face!</p>
        </BodyStyledDiv>
        <BodyStyledDiv>
            <form>
                <label id="inputParent"> <p>Accept Here</p>
                <span></span>
                <input
                    type="checkbox"
                    name="terms"
                    id="selectterms"
                    checked={formValues.terms}
                    onChange={(e) => change(e)}
                />
                </label>
                <label id="inputParent"> 
                <p onClick={() => setTermsSet(!termsSet)}>Click here to go back</p>
                </label>
            </form>
        </BodyStyledDiv>
        </>
    )
}

export default function Form(props) {

    const { 
        formValues, 
        setFormValues, 
        formErrors, 
        setFormErrors,
        termsSet,
        setTermsSet, 
        intialFormValues, 
        intialFormErrors,
        } = props

    
    return (
        <>
            {   !termsSet ?

            <>
            <HeadingStyledDiv>
    <div id="mainHeading">
    <h1>Account Creation:</h1>
    <span></span>
    <p>Input your information here.</p>
    </div>
    </HeadingStyledDiv>
    <BodyStyledDiv>
    <form>
    <label id="inputParent"> <p>Name</p>
    <span></span>
    <input 
            type="text"
            name="name"
            id="nameselect"
            value={formValues.name}
            placeholder="Name here please"
            onChange={(e) => change(e)}
        />
    </label>
    <label id="inputParent"> <p>Email</p>
    <span></span>
    <input 
            type="text"
            name="email"
            id="emailselect"
            value={formValues.email}
            placeholder="Email here please"
            onChange={(e) => change(e)}
        />
    </label>
    <label id="inputParent"> <p>Password</p>
    <span></span>
    <input 
            type="text"
            name="password"
            id="passwordselect"
            value={formValues.password}
            placeholder="Password here please"
            onChange={(e) => change(e)}
        />
    </label>
    {
        <label id="inputParent">
                 <p onClick={() => setTermsSet(!termsSet)}>{formValues.terms === false ? "Click here to view our terms of service." : "Thank you for accepting, you won't immediately regret it."}</p>
        </label>
    }
    <label id="inputParent"> <p>Income</p>
    <span></span>
    <span id="income" class="alot">
        <input 
            type="radio"
            name="money"
            id="moneyselect"
            value="Alot"
            onChange={(e) => change(e)}
        />
    </span>
    <span id="income" class="good">
        <input 
            type="radio"
            name="money"
            id="moneyselect"
            value="Good Amount"
            onChange={(e) => change(e)}
        /> 
    </span>
    <span id="income" class="bad">
        <input
            type="radio"
            name="money"
            id="moneyselect"
            value="Financially Challenged"
            onChange={(e) => change(e)}
        />
    </span>
    </label>
    <label id="inputParent">
            <button>Submit</button>
    </label>
    </form>
    </BodyStyledDiv>
            </>
            :
            <Terms formValues={formValues} setFormValues={setFormValues} termsSet={termsSet} setTermsSet={setTermsSet} />
            }
        </>
        
    )
}