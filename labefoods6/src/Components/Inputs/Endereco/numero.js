import { InputStyled } from "./Styled"

export const NumeroInput = ({value, onChange}) =>{

    return(
        <InputStyled
            required
            id="outlined-required"
            min={2}
            label="Número" 
            variant="outlined"
            name="number"
            type="number"
            value={value}
            onChange={onChange}
            placeholder="Número"
        />
    )

}