import Ingredient from './Ingredient'

export const IngredientList = ({ list }) =>
    <ul className="ingredients">
        {list.map((ingredient, i) => 
            <Ingredient key={i} {...ingredient} />)}
    </ul>

IngredientList.displayName = 'IngredientsList'

export default IngredientList