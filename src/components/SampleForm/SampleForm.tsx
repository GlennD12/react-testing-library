export const SampleForm = () => {
    return (
        <form>
            <div>
                <input type="text" name="fullName" id="fullName" /> 
                <input type="number" name="age" data-testid="age" />
            </div>
            <div>
                <select name="" id="" className="js-framework">
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                    <option value="Angular">Angular</option>
                </select>
            </div>
            <div>
                <input type="time" role="time" name="" id="" />
            </div>
            <div>
                <label htmlFor="checkbox">Check</label>
                <input id="checkbox" type="checkbox" />
            </div>
            <div>
                <input type="button" value="Submit" />
            </div>
        </form>        
    )
}
