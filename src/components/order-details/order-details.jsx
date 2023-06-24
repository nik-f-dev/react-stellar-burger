import styles from './order-details.module.css';
import checkmark from './../../images/checkmark.svg';

export default function IngredientDetails () {
  return(
    <div className='mt-30'>
      <h2 className='text text_type_digits-large'>034536</h2>
      <p className={`${styles.orderIdDescription} text text_type_main-medium mt-8`}>идентификатор заказа</p>
      <div className={`${styles.orderLogo} mt-15`}>
        <img src={checkmark} alt="checkmark" width="120px" height="120px" />
      </div>
      <p className={`${styles.orderInfo} mt-15 text text_type_main-default`}>Ваш заказ начали готовить</p>
      <p className={`${styles.orderInfo} mt-2 mb-30 text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}
