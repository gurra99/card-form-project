import React, { useEffect, useState } from "react";
import {
  FormContainer,
  FormWrapper,
  Label,
  FormGroup,
  FromGroupDetail,
  Item,
  LabelExpirationDate,
  FormTextContainer,
  Header,
} from "./form.styles";
import InputField from "../input-field/input-field";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { toast } from "react-toastify";
import { SubmitButton } from "../submit-button/submit-button";

const Form = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardName, setCardName] = useState<string>("");
  const [cardType, setCardType] = useState<string>("Unknown");
  const [cvv, setCvv] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const [errorCardNumber, setErrorCardNumber] = useState<string>("");
  const [errorCardName, setErrorCardName] = useState<string>("");
  const [errorMonth, setErrorMonth] = useState<boolean>(false);
  const [errorYear, setErrorYear] = useState<boolean>(false);
  const [errorCvv, setErrorCvv] = useState<string>("");

  const [slideOutForm, setSlideOutForm] = useState<boolean>(false);

  // eslint-disable-next-line
  useEffect(() => {}, [
    cardNumber,
    cardName,
    month,
    year,
    cvv,
    errorCardName,
    errorCardNumber,
    cardType,
    errorCvv,
    slideOutForm,
  ]);

  const handleMonthChange = (event: SelectChangeEvent<string>) => {
    setMonth(event.target.value);
    setErrorMonth(false);
  };

  const handleYearChange = (event: SelectChangeEvent<string>) => {
    setYear(event.target.value);
    setErrorYear(false);
  };

  const cardTypeRegex = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard:
      /^(5[1-5][0-9]{14}|2(22[1-9]|2[3-9][0-9]|[3-6][0-9]{2}|7([01][0-9]|20))[0-9]{12})$/,
    amex: /^3[47][0-9]{13}$/,
    discover: /^6(?:011|5[0-9]{2})(?:[0-9]{12})$/,
  };

  const detectCardType = (value: string) => {
    const cleaned = value.replace(/\D/g, ""); // Remove non-numeric characters
    if (cardTypeRegex.visa.test(cleaned)) return "Visa";
    if (cardTypeRegex.mastercard.test(cleaned)) return "MasterCard";
    if (cardTypeRegex.amex.test(cleaned)) return "American Express";
    if (cardTypeRegex.discover.test(cleaned)) return "Discover";
    return "Unknown";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (allInputsAreValid()) {
      toast.success("Credit card added!");
      setSlideOutForm(true);
    }
  };

  const validateCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    let sum = 0;
    let shouldDouble = false;

    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned[i]);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
  };

  const isValidCreditCardNumber = () => {
    // Validate card number format and with Luhn algorithm
    if (cardType === "Unknown") {
      setErrorCardNumber("Unsupported credit card type.");
      return false;
    } else if (!validateCardNumber(cardNumber)) {
      setErrorCardNumber("Invalid credit card number.");
      return false;
    } else {
      return true;
    }
  };

  const isValidCardholderName = () => {
    // Check if name is within a reasonable length (2-50 characters)
    if (cardName.length < 3 || cardName.length > 30) {
      setErrorCardName("Name must be between 3 and 50 characters.");
      return false;
    }

    // Check for valid characters (letters and spaces only)
    else if (!/^[a-zA-Z\s]+$/.test(cardName)) {
      setErrorCardName("Name can only contain letters and spaces.");
      return false;
    }
    // Check if name is not empty
    else if (!cardName.trim()) {
      setErrorCardName("Cardholder name is required.");
      return false;
    } else {
      setErrorCardName("");
      return true;
    }
  };

  const isValidCvv = (cvv: string) => {
    setErrorCvv("");
    // Check if CVV is only numbers and 3-4 digits long
    if (!/^\d{3,4}$/.test(cvv)) {
      setErrorCvv("Only 3 or 4 digits");
      return false;
    }
    return true;
  };

  const isValidMonth = () => {
    if (!month) {
      setErrorMonth(true);
      return false;
    }
    setErrorMonth(false);
    return true;
  };

  const isValidYear = () => {
    if (!year) {
      setErrorYear(true);
      return false;
    }
    setErrorYear(false);
    return true;
  };

  const handleChangeCardNumber = (name: string) => {
    const number = name.replace(/\D/g, "");
    setCardNumber(number);

    const detectedType = detectCardType(number);
    setCardType(detectedType);

    setErrorCardNumber("");
  };

  const handleChangeName = (name: string) => {
    if (/^[a-zA-Z\s]*$/.test(name)) {
      setCardName(name);
      isValidCardholderName();
    }
  };

  const handleCvv = (cvv: string) => {
    if (/^\d*$/.test(cvv)) {
      setCvv(cvv);
      isValidCvv(cvv);
    }
  };

  const printsOutMonthItems = () => {
    return Array.from({ length: 12 }, (_, i) => (
      <MenuItem key={i + 1} value={i + 1}>
        {String(i + 1).padStart(2, "0")}
      </MenuItem>
    ));
  };

  const printsOutYearItems = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 10 }, (_, i) => (
      <MenuItem key={i + currentYear} value={i + currentYear}>
        {i + currentYear}
      </MenuItem>
    ));
  };

  const allInputsAreValid = () => {
    const cardNumber = isValidCreditCardNumber();
    const cardCvv = isValidCvv(cvv);
    const name = isValidCardholderName();
    const month = isValidMonth();
    const year = isValidYear();
    return cardNumber && name && month && year && cardCvv;
  };

  const isButtonDisabled = () => {
    if (cardNumber && cardName && year && month && cvv) {
      return false;
    }
    return true;
  };

  return (
    <FormContainer className={`${slideOutForm ? "slide-out-element" : ""}`}>
      <Header>Add Credit Card</Header>
      <FormWrapper autoComplete="off" onSubmit={handleSubmit}>
        <FormGroup>
          <FormTextContainer>
            <Label>Card Number</Label>
            {cardType != "Unknown" && (
              <Label style={{ color: "var(--color-gren)" }}>{cardType}</Label>
            )}
            {errorCardNumber != "" && (
              <Label style={{ color: "var(--color-red)" }}>
                {errorCardNumber}
              </Label>
            )}
          </FormTextContainer>
          <InputField
            value={cardNumber}
            name="cardNumber"
            onChangeHandler={(event) => {
              handleChangeCardNumber(event.target.value);
            }}
            invalid={errorCardNumber ? true : false}
          />
        </FormGroup>

        <FormGroup>
          <FormTextContainer>
            <Label>Card Name</Label>
            {errorCardName != "" && (
              <Label data-cy="card-name" style={{ color: "var(--color-red)" }}>
                {errorCardName}
              </Label>
            )}
          </FormTextContainer>
          <InputField
            value={cardName}
            name="cardName"
            dataCy="validate-card-name-input"
            onChangeHandler={(event) => {
              handleChangeName(event.target.value);
            }}
            invalid={errorCardName ? true : false}
          />
        </FormGroup>

        <FromGroupDetail>
          <Item>
            <LabelExpirationDate>Expiration Date</LabelExpirationDate>
            <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
              <InputLabel id="select-label">Month</InputLabel>
              <Select
                labelId="select-label"
                id="select"
                value={month}
                label="Month"
                onChange={handleMonthChange}
                style={
                  errorMonth ? { border: "2px solid var(--color-red)" } : {}
                }
              >
                {printsOutMonthItems()}
              </Select>
            </FormControl>
          </Item>

          <Item>
            <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
              <InputLabel id="select-label">Year</InputLabel>
              <Select
                labelId="select-label"
                id="select"
                value={year}
                label="Year"
                onChange={handleYearChange}
                style={
                  errorYear ? { border: "2px solid var(--color-red)" } : {}
                }
              >
                {printsOutYearItems()}
              </Select>
            </FormControl>
          </Item>
          <Item>
            {errorCvv != "" && (
              <Label style={{ color: "var(--color-red)" }}>{errorCvv}</Label>
            )}
            <InputField
              placeholder="CVV"
              value={cvv}
              name="cvv"
              invalid={errorCvv ? true : false}
              onChangeHandler={(event) => {
                handleCvv(event.target.value);
              }}
            />
          </Item>
        </FromGroupDetail>
        <SubmitButton
          description={"Submit"}
          disabled={isButtonDisabled()}
          type="submit"
        />
      </FormWrapper>
    </FormContainer>
  );
};

export default Form;
