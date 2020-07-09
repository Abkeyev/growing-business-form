import React from "react";
import { Grid, MenuItem } from "@material-ui/core";
import {
  BccTypography,
  BccCheckbox,
  BccInput,
  BccButton,
  BccSlider,
  BccStepLabel,
  BccStepper,
  BccStep,
  BccFormControl,
  BccFormControlLabel,
  BccRadio,
  BccFormHelperText,
  BccFormLabel,
  BccRadioGroup,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MaskedInput from "react-maskedinput";
import BlockUi from "react-block-ui";
import { Snackbar } from "@material-ui/core";
import { Alert as MuiAlert } from "@material-ui/lab";
import "react-block-ui/style.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        background: "#fff",
      },
      container: {
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "80px 20px",
      },
      title: {
        marginBottom: 40,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 28,
        lineHeight: "33px",
        color: "#141414",
      },

      orderNum: {
        color: "#249052",
        paddingRight: 10,
        borderRight: ".5px solid rgba(20, 20, 20, .7)",
      },
      orderNumTitle: {
        paddingLeft: 10,
        color: "#141414",
      },
      orderNumText: {
        marginTop: 20,
        opacity: 0.7,
      },
      item: {
        width: "100%",
        marginBottom: 30,
      },

      stepsBlock: {
        marginBottom: 80,
      },
      orderForm: {
        width: "100%",
        textAlign: "left",
        background: "#FFFFFF",
        border: "1px solid #B9B9B9",
        borderRadius: 8,
      },
      innerOrderForm: {
        padding: "30px 20px",
      },
      titleForm: {
        marginBottom: 20,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: "28px",
        color: "#141414",
      },
      titleFormStep1: {
        marginBottom: 40,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: "28px",
        color: "#141414",
      },
      subTitleForm: {
        marginBottom: 40,
        opacity: 0.7,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: "19px",
        color: "#141414",
      },
      inputStyle: {
        marginBottom: 30,
        textAlign: "left",
      },
      checkboxText: {
        alignItems: "flex-start",
        marginBottom: 20,
        marginTop: 15,
      },
      btnWrap: {
        width: "100%",
        "& > button": { width: "100%", marginBottom: 15 },
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      garant: { textAlign: "left", marginBottom: 16 },
    },
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        background: "#fff",
      },
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "36px 100px",
      },
      title: {
        marginBottom: 40,
      },
      orderNum: {
        color: "#249052",
        paddingRight: 10,
        borderRight: ".5px solid rgba(20, 20, 20, .7)",
      },
      orderNumTitle: {
        paddingLeft: 10,
        color: "#141414",
      },
      orderNumText: {
        marginTop: 20,
        opacity: 0.7,
      },
      item: {
        width: "calc(33% - 20px)",
      },
      stepsBlock: {
        marginBottom: 80,
      },
      orderForm: {
        width: "50%",
        maxWidth: "50%",
        margin: "0 auto",
        textAlign: "center",
      },
      titleForm: {
        marginBottom: 20,
      },
      titleFormStep1: {
        marginBottom: 20,
      },
      subTitleForm: {
        marginBottom: 40,
        opacity: 0.7,
      },
      inputStyle: {
        marginBottom: 30,
        textAlign: "left",
      },
      checkboxText: {
        marginBottom: 20,
        marginTop: 15,
        "& > div:last-child": {
          marginLeft: 20,
          textAlign: "left",
        },
      },
      btnWrap: {
        width: "calc(50% - 10px)",
        "& > button": { width: "100%" },
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      garant: { textAlign: "left" },
      radio: {
        marginBottom: 30,
      },
    },
    paymentWrap: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      marginBottom: 30,
    },
    sliderWrap: {
      position: "relative",
      width: "100%",
      "& > div > div": {
        width: "100%",
      },
    },
    input: {
      display: "block",
      width: "100%",
    },
    sliderRange: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: -20,
      color: "#b3b6ba",
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
    },
    stepper: {
      padding: "40px 0 60px",
    },
    radio: {
      width: "100%",
      textAlign: "left",
    },
    files: {
      "& > div:nth-child(2n)": {
        textAlign: "right",
      },
      "& > div": {
        width: "calc(50% - 20px)",
        textAlign: "left",
      },
    },
    filesOrder: {
      marginBottom: 30,
      "& > div:nth-child(2n)": {
        textAlign: "right",
      },
      "& > div": {
        width: "calc(50% - 20px)",
        textAlign: "left",
      },
    },
  })
);

const Alert = (props: any) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const BccMaskedInput = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="7(111) 111 11 11"
      placeholder={"7(707) 707 77 77"}
    />
  );
};

const cities = [
  "Актау",
  "Актобе",
  "Алматы",
  "Атырау",
  "Жезказган",
  "Караганда",
  "Кокшетау",
  "Костанай",
  "Кызылорда",
  "Нур-Султан",
  "Павлодар",
  "Петропавловск",
  "Семей",
  "Талдыкорган",
  "Тараз",
  "Туркестанская область",
  "Уральск",
  "Усть-Каменогорск",
  "Шымкент",
];

const Order = (props: any) => {
  const classes = useStyles({});

  const [step, setStep] = React.useState(1);
  const [substep, setSubstep] = React.useState(3);
  const [sum, setSum] = React.useState(0);
  const [period, setPeriod] = React.useState(null);
  const [agree, setAgree] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [desc, setDesc] = React.useState("");
  const [lice, setLice] = React.useState(null);

  const isValid = () => {
    return agree && sum > 0 && period;
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <div className={classes.orderForm}>
          <BlockUi tag="div" blocking={isLoading}>
            {step === 0 ? (
              <Grid
                direction="column"
                container
                className={classes.innerOrderForm}
              >
                <Grid item>
                  <BccTypography
                    type="h2"
                    weight="medium"
                    block
                    className={classes.titleForm}
                  >
                    Анкета
                  </BccTypography>
                  <BccTypography
                    type="p1"
                    weight="medium"
                    block
                    className={classes.subTitleForm}
                  >
                    Парметры Вашей заявки
                  </BccTypography>
                </Grid>
                <Grid item>
                  <BccInput
                    className={classes.inputStyle}
                    fullWidth
                    label={"Тип кредита"}
                    variant="filled"
                    id="type"
                    name="type"
                    value={"Растущий бизнес"}
                    disabled
                  />
                </Grid>
                <Grid item>
                  <div className={classes.paymentWrap}>
                    <div className={classes.sliderWrap}>
                      <BccInput
                        label="Сумма кредита"
                        key="loan"
                        value={sum + " ₸"}
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={(e: any) =>
                          e.target.value > 30000000
                            ? setSum(30000000)
                            : setSum(e.target.value)
                        }
                        className={classes.input}
                      />
                      <BccSlider
                        style={{
                          left: 6,
                          right: 6,
                          width: "calc(100% - 12px)",
                          bottom: -1,
                          padding: 0,
                          position: "absolute",
                        }}
                        min={0}
                        max={30000000}
                        step={1000000}
                        value={sum}
                        valueLabelDisplay="off"
                        defaultValue={sum}
                        onChange={(e: any, val: any) =>
                          setSum(val instanceof Array ? val[1] : val)
                        }
                      />
                      <div className={classes.sliderRange}>
                        <span>0</span>
                        <span>30 000 000</span>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item>
                  <BccInput
                    fullWidth={true}
                    className={classes.inputStyle}
                    label={"Срок кредита"}
                    id="period"
                    name="period"
                    value={period}
                    onChange={(e: any) => setPeriod(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    select
                  >
                    <MenuItem key={12} value={12}>
                      12 месяцев
                    </MenuItem>
                    <MenuItem key={24} value={24}>
                      24 месяцев
                    </MenuItem>
                    <MenuItem key={36} value={36}>
                      36 месяцев
                    </MenuItem>
                  </BccInput>
                </Grid>
                <Grid item>
                  <BccTypography type="p3" block className={classes.radio}>
                    Для начала работы банком с Вашей кредитной заявкой
                    предоставьте подробную информацию о бизнесе. Заполнение
                    анкеты не займет более 5 минут, для успешного завершения
                    подготовьте следующие документы и материалы:
                  </BccTypography>
                </Grid>
                <Grid item>
                  <BccTypography type="p3" block className={classes.radio}>
                    Для успешной подачи заявки Вам необходимо подготовить
                    ледующий пакет документов:
                  </BccTypography>
                  <BccTypography type="p3" block className={classes.radio}>
                    По заемщику:
                  </BccTypography>
                  <Grid container justify="space-between">
                    <Grid item style={{ width: "100%" }}>
                      <Grid
                        container
                        justify="space-between"
                        className={classes.files}
                        spacing={1}
                        alignItems="center"
                      >
                        <Grid item>
                          <BccTypography type="p4">
                            Удостоверение личности
                          </BccTypography>
                        </Grid>
                        <Grid item>
                          <>
                            <input
                              accept="image/*"
                              style={{ display: "none" }}
                              id="upload"
                              multiple
                              type="file"
                            />
                            <label htmlFor="upload">
                              <BccButton
                                variant="contained"
                                color="primary"
                                component="span"
                              >
                                Выберите файл
                              </BccButton>
                            </label>
                          </>
                        </Grid>
                        <Grid item>
                          <BccTypography type="p4">
                            Свидетельствоо государственной регистрации
                          </BccTypography>
                        </Grid>
                        <Grid item>
                          <>
                            <input
                              accept="image/*"
                              style={{ display: "none" }}
                              id="upload"
                              multiple
                              type="file"
                            />
                            <label htmlFor="upload">
                              <BccButton
                                variant="contained"
                                color="primary"
                                component="span"
                              >
                                Выберите файл
                              </BccButton>
                            </label>
                          </>
                        </Grid>
                        <Grid item>
                          <BccTypography type="p4">
                            Удостоверение личности
                          </BccTypography>
                        </Grid>
                        <Grid item>
                          <>
                            <input
                              accept="image/*"
                              style={{ display: "none" }}
                              id="upload"
                              multiple
                              type="file"
                            />
                            <label htmlFor="upload">
                              <BccButton
                                variant="contained"
                                color="primary"
                                component="span"
                              >
                                Выберите файл
                              </BccButton>
                            </label>
                          </>
                        </Grid>
                        <Grid item>
                          <BccTypography type="p4">
                            Удостоверение личности
                          </BccTypography>
                        </Grid>
                        <Grid item>
                          <>
                            <input
                              accept="image/*"
                              style={{ display: "none" }}
                              id="upload"
                              multiple
                              type="file"
                            />
                            <label htmlFor="upload">
                              <BccButton
                                variant="contained"
                                color="primary"
                                component="span"
                              >
                                Выберите файл
                              </BccButton>
                            </label>
                          </>
                        </Grid>
                        <Grid item>
                          <BccTypography type="p4">
                            Удостоверение личности
                          </BccTypography>
                        </Grid>
                        <Grid item>
                          <>
                            <input
                              accept="image/*"
                              style={{ display: "none" }}
                              id="upload"
                              multiple
                              type="file"
                            />
                            <label htmlFor="upload">
                              <BccButton
                                variant="contained"
                                color="primary"
                                component="span"
                              >
                                Выберите файл
                              </BccButton>
                            </label>
                          </>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    justify="space-between"
                    wrap="nowrap"
                    className={classes.checkboxText}
                  >
                    <Grid item>
                      <BccCheckbox
                        value="remember"
                        color="primary"
                        checked={agree}
                        onChange={() => setAgree(!agree)}
                      />
                    </Grid>
                    <Grid item>
                      <BccTypography type="p3">
                        Я подтверждаю, что ЮЛ/ИП является резидентом РК и не
                        является аффилированным к банку
                      </BccTypography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container justify="space-between">
                    <Grid item className={classes.btnWrap}></Grid>
                    <Grid item className={classes.btnWrap}>
                      <BccButton
                        variant="contained"
                        disabled={!isValid()}
                        color="primary"
                      >
                        Продолжить
                      </BccButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ) : step === 1 ? (
              <Grid
                direction="column"
                container
                className={classes.innerOrderForm}
              >
                <Grid item>
                  <BccStepper activeStep={substep} className={classes.stepper}>
                    <BccStep key={`step1`}>
                      <BccStepLabel>
                        <BccTypography type="p4">Шаг 1</BccTypography>
                      </BccStepLabel>
                    </BccStep>
                    <BccStep key={`step2`}>
                      <BccStepLabel>
                        <BccTypography type="p4">Шаг 2</BccTypography>
                      </BccStepLabel>
                    </BccStep>
                    <BccStep key={`step3`}>
                      <BccStepLabel>
                        <BccTypography type="p4">Шаг 3</BccTypography>
                      </BccStepLabel>
                    </BccStep>
                  </BccStepper>
                  <BccTypography
                    type="h2"
                    weight="medium"
                    block
                    className={classes.titleFormStep1}
                  >
                    {substep === 1
                      ? "Информация о бизнесе"
                      : substep === 2
                      ? "Обеспечение"
                      : "Документы"}
                  </BccTypography>
                </Grid>
                {substep === 1 ? (
                  <>
                    <Grid item>
                      <BccInput
                        className={classes.inputStyle}
                        fullWidth
                        label={"Опишите кратко чем занимается Ваше предприятие"}
                        variant="filled"
                        id="desc"
                        name="desc"
                        value={desc}
                      />
                    </Grid>
                    <Grid item>
                      <BccFormControl className={classes.radio}>
                        <BccFormLabel>
                          Лицензируется ли эта деятельность?:
                        </BccFormLabel>
                        <BccRadioGroup
                          row
                          value={lice}
                          onChange={(e: any) => setLice(e.target.value)}
                        >
                          <BccFormControlLabel
                            control={<BccRadio />}
                            label="Нет"
                            value="no"
                            labelPlacement="end"
                          />
                          <BccFormControlLabel
                            control={<BccRadio />}
                            label="Да"
                            value="yes"
                            labelPlacement="end"
                          />
                        </BccRadioGroup>
                      </BccFormControl>
                    </Grid>
                    <Grid item>
                      <BccInput
                        className={classes.inputStyle}
                        fullWidth
                        label={"Где находится Ваше предприятия"}
                        variant="filled"
                        id="desc"
                        helperText={
                          "офис, торговая точка, производственные мощности и т.д."
                        }
                        name="desc"
                        value={desc}
                      />
                    </Grid>
                    <Grid item>
                      <BccInput
                        className={classes.inputStyle}
                        fullWidth
                        label={"Сколько наемных сотрудников работает"}
                        variant="filled"
                        id="desc"
                        name="desc"
                        value={desc}
                      />
                    </Grid>
                    <Grid item>
                      <BccInput
                        className={classes.inputStyle}
                        fullWidth
                        label={"Укажите цель финансирования"}
                        variant="filled"
                        id="desc"
                        name="desc"
                        value={desc}
                      />
                    </Grid>
                  </>
                ) : substep === 2 ? (
                  <>
                    <Grid item>
                      <Grid
                        container
                        justify="flex-start"
                        wrap="nowrap"
                        className={classes.checkboxText}
                      >
                        <Grid item>
                          <BccCheckbox
                            value="remember"
                            color="primary"
                            checked={agree}
                            onChange={() => setAgree(!agree)}
                          />
                        </Grid>
                        <Grid item>
                          <BccTypography type="p3">
                            Предоставляется обеспечение
                          </BccTypography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <BccInput
                        fullWidth={true}
                        className={classes.inputStyle}
                        label={"Тип обеспечения"}
                        id="period"
                        name="period"
                        value={period}
                        onChange={(e: any) => setPeriod(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        select
                      >
                        <MenuItem key={12} value={12}>
                          Тип обеспечения
                        </MenuItem>
                        <MenuItem key={24} value={24}>
                          Тип обеспечения
                        </MenuItem>
                        <MenuItem key={36} value={36}>
                          Тип обеспечения
                        </MenuItem>
                      </BccInput>
                    </Grid>

                    <Grid item>
                      <BccInput
                        className={classes.inputStyle}
                        fullWidth
                        label={"Краткое описание"}
                        variant="filled"
                        id="desc"
                        name="desc"
                        value={desc}
                      />
                    </Grid>
                    <Grid item>
                      <BccInput
                        className={classes.inputStyle}
                        fullWidth
                        label={"Рыночная стоимость, тенге"}
                        variant="filled"
                        id="desc"
                        name="desc"
                        value={desc}
                      />
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item>
                      <BccTypography type="p3" block className={classes.radio}>
                        Загрузите указанные документы. Предпочтительный формат -
                        pdf, jpg. Максимальный размер 1 файла - 5 Мб.
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        justify="space-between"
                        className={classes.filesOrder}
                        spacing={1}
                        alignItems="center"
                      >
                        <Grid item>
                          <BccTypography type="p4">
                            Декларация о доходах
                          </BccTypography>
                        </Grid>
                        <Grid item>
                          <>
                            <input
                              accept="image/*"
                              style={{ display: "none" }}
                              id="upload"
                              multiple
                              type="file"
                            />
                            <label htmlFor="upload">
                              <BccButton
                                variant="contained"
                                color="primary"
                                component="span"
                              >
                                Выберите файл
                              </BccButton>
                            </label>
                          </>
                        </Grid>
                        <Grid item>
                          <BccTypography type="p4">
                            Выписка по счетам за 12 месяцев
                          </BccTypography>
                        </Grid>
                        <Grid item>
                          <>
                            <input
                              accept="image/*"
                              style={{ display: "none" }}
                              id="upload"
                              multiple
                              type="file"
                            />
                            <label htmlFor="upload">
                              <BccButton
                                variant="contained"
                                color="primary"
                                component="span"
                              >
                                Выберите файл
                              </BccButton>
                            </label>
                          </>
                        </Grid>
                        <Grid item>
                          <BccTypography type="p4">
                            Справка об оборотах за 12 месяцев (не обязательно)
                          </BccTypography>
                        </Grid>
                        <Grid item>
                          <>
                            <input
                              accept="image/*"
                              style={{ display: "none" }}
                              id="upload"
                              multiple
                              type="file"
                            />
                            <label htmlFor="upload">
                              <BccButton
                                variant="contained"
                                color="primary"
                                component="span"
                              >
                                Выберите файл
                              </BccButton>
                            </label>
                          </>
                        </Grid>
                        <Grid item>
                          <BccTypography type="p4">Фото бизнеса</BccTypography>
                        </Grid>
                        <Grid item>
                          <>
                            <input
                              accept="image/*"
                              style={{ display: "none" }}
                              id="upload"
                              multiple
                              type="file"
                            />
                            <label htmlFor="upload">
                              <BccButton
                                variant="contained"
                                color="primary"
                                component="span"
                              >
                                Выберите файл
                              </BccButton>
                            </label>
                          </>
                        </Grid>
                        <Grid item>
                          <BccTypography type="p4">
                            Дополнительные документы (не обязательно)
                          </BccTypography>
                        </Grid>
                        <Grid item>
                          <>
                            <input
                              accept="image/*"
                              style={{ display: "none" }}
                              id="upload"
                              multiple
                              type="file"
                            />
                            <label htmlFor="upload">
                              <BccButton
                                variant="contained"
                                color="primary"
                                component="span"
                              >
                                Выберите файл
                              </BccButton>
                            </label>
                          </>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                )}
                <Grid item>
                  <Grid container justify="space-between">
                    <Grid item className={classes.btnWrap}></Grid>
                    <Grid item className={classes.btnWrap}>
                      <BccButton
                        variant="contained"
                        onClick={() =>
                          setSubstep(substep + 1 === 4 ? 1 : substep + 1)
                        }
                        color="primary"
                      >
                        Продолжить
                      </BccButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ) : step === 2 ? (
              <></>
            ) : (
              <></>
            )}
          </BlockUi>
        </div>
      </div>
    </div>
  );
};

export default Order;
