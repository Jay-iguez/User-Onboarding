import { HeadingStyledDiv, BodyStyledDiv} from "./Styles"

export default function Form(props) {

    const { 
        formValues, 
        setFormValues, 
        formErrors, 
        setFormErrors, 
        intialFormValues, 
        intialFormErrors } = props

        function change (e) {
            
        }
    
    return (
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
                            value=""
                            placeholder="Email here please"
                            
                        />
                    </label>
                    <label id="inputParent"> <p>Password</p>
                    <span></span>
                    <input 
                            type="text"
                            name="password"
                            id="passwordselect"
                            value=""
                            placeholder="Password here please"
                            
                        />
                    </label>
                    {
                        <label id="inputParent">
                            <p>Click here to view our terms of service.</p>
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

                        />
                    </span>
                    <span id="income" class="good">
                        <input 
                            type="radio"
                            name="money"
                            id="moneyselect"
                            value="Good Amount"

                        /> 
                    </span>
                    <span id="income" class="bad">
                        <input
                            type="radio"
                            name="money"
                            id="moneyselect"
                            value="Financially Challenged"

                        />
                    </span>
                    </label>
                    <label id="inputParent">
                            <button>Submit</button>
                    </label>
                </form>
            </BodyStyledDiv>
        </>
        
    )
}