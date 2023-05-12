import styles from './Form.module.css'
import { categories } from "../Category"

export default function Form() {
  return (
  <section className={styles.container}>
    <h2>Cadastro de vídeo</h2>
    <form>
      <div>
        <label htmlFor="url">Url do vídeo</label>
        <input 
          type="text"
          placeholder="Digite a URL do vídeo"
          required="required"
           />
      </div>
      <div>
        <label htmlFor="select">Categoria</label>
        <select>
          <option value="-">Selecione uma categoria</option>
          {categories.map(item => (
            <option value={item} key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <button>Cadastrar</button>
      </div>
    </form>
  </section>)
}