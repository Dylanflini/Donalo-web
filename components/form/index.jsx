import React from 'react'
import { Div, FormStyle, Group, Input, Label, Select, Upload } from './styles';
import { useForm } from './useForm';

export default function Form() {

  const inputRef = React.useRef()
  const [ post, handleChange, handleSubmit ] = useForm()

  return (
    <FormStyle>
      <Group>
        {

        }
        <Div onClick={() => inputRef.current.click()} >
          <input ref={inputRef} style={{ display: 'none' }} id='image' name='image' placeholder='' type='file' accept="image/*" value={''} onChange={handleChange} />
          <Upload > Subir Imagen </Upload>
        </Div>
        {/* <Image src={ image } />z */}
        {/* <Label>
          Subir imagenes
        </Label> */}
      </Group>
      <Group>
        <Input id='title' name='title' placeholder='Título' type='text' maxLength={40} value={post.title} onChange={handleChange} />
        {/* <Label>
          Titulo
      </Label> */}

      </Group>

      <Group>
        <Input id='description' name='description' placeholder='Descripción' value={post.description} type='text' onChange={handleChange} />
        {/* <Label>
          Descripción
      </Label> */}

      </Group>
      <Group>
        <Select id='category' name='category' value={post.category} onChange={handleChange}  >
          <option> Categoría</option>
          <option> Ropa</option>
          <option> Tecnología</option>
          <option> Alimentos</option>
        </Select>
      </Group>
      {/* <Label>
        Categoria
      </Label> */}

      <Group>
        <Input id='contactData' name='contactData' placeholder='Teléfono de contacto' type='text' onChange={handleChange} />
        {/* <Label>
          Dato contactoo
      </Label> */}

      </Group>
      <Button onClick={handleSubmit} >Publicar</Button>
    </FormStyle>
  )
}

