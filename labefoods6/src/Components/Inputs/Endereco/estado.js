import { InputStyled } from "./Styled"

export const EstadoInput = ({value, onChange}) =>{

    return(
        <InputStyled
        required
        id="outlined-required" 
        label="Estado" 
        variant="outlined"
        name="state"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Estado"
        minLength={2}
        />
    )

}