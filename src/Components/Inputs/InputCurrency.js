import "./Components.css";
import IntlCurrencyInput from "react-intl-currency-input"

function InputTelephone({ register, id, place }) {
  const currencyConfig = {
    locale: "pt-BR",
    formats: {
      number: {
        BRL: {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      },
    },
  };

  return (
    <div>
      <IntlCurrencyInput
        className="currency"
        currency="BRL"
        {...register(id, { required: "isso é requerido" })}
        config={currencyConfig}
      />
    </div>
  );
}

export default InputTelephone;
