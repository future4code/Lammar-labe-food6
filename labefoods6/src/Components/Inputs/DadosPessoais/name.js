import { InputStyled } from "../Endereco/Styled"

export const NameInput = ({value, onChange}) =>{
    return(
        <InputStyled
            required
            id="outlined-required"
            label="Nome"
            variant="outlined"            
            name="name"
            value={value}
            onChange={onChange}
            placeholder="Nome completo"
        />
    )
}