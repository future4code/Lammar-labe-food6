import { InputStyled } from "./Styled"

export const ComplementoInput = ({value, onChange}) =>{

    return(
        <InputStyled
            id="outlined" 
            label="Complemento" 
            variant="outlined"
            name="complement"
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Apto. / Bloco"
        />
    )

}