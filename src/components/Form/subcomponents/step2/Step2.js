import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { resumeContext } from "../../../../helper/context";
import style from "./style.module.css";

function Step2() {
  const { setStep, data } = useContext(resumeContext);

  var initialValues = {
    resumeObjective: "",
    domainKnowledge: "",
    languages: "",
    hobbies: "",
    graduation: "",
    gNote: "",
    HSC: "",
    hscNote: "",
  };

  const validationSchema = Yup.object({
    resumeObjective: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("* Required"),
    domainKnowledge: Yup.string().required("* Required"),
    languages: Yup.string(),
    hobbies: Yup.string(),
    graduation: Yup.string()
      .min(3, "Your college has a bigger name")
      .required("* Required"),
    gNote: Yup.string(),
    HSC: Yup.string().required("* Required"),
    hscNote: Yup.string(),
  });

  const onSubmit = (values) => {
    setStep(3);
    data.pInfo = values;
  };

  return (
    <Formik
      initialValues={data.pInfo || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={style.formInput}>

      <br></br>

        <h3>Good Going!!!</h3>

        <label htmlFor="resumeObjective">About</label>
        <Field
          name="resumeObjective"
          placeholder=" "
          className={style.textField}
        />
        <ErrorMessage name="resumeObjective">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <br></br>

        <label htmlFor="domainKnowledge">Skills</label>
        <Field
          name="domainKnowledge"
          placeholder="  "
          className={style.textField}
        />
        <ErrorMessage name="domainKnowledge">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <br></br>


        <label htmlFor="languages">Languages</label>
        <Field
          name="languages"
          placeholder="  "
          className={style.textField}
        />
        <ErrorMessage name="languages">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <br></br>

        <label htmlFor="graduation">Graduated Year</label>
        <Field
          name="graduation"
          placeholder="  "
          className={style.textField}
        />
        <ErrorMessage name="graduation">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <br></br>


        <label htmlFor="gNote">Graduation</label>
        <Field
          name="gNote"
          placeholder="ex B.Tech"
          className={style.textField}
        />
        <ErrorMessage name="gNote">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <br></br>


        <label htmlFor="HSC">SSC </label>
        <Field
          name="SSC" 
          placeholder=" "
          className={style.textField}
        />
        <ErrorMessage name="SSC">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <br></br>

        <label htmlFor="HSC">HSC</label>
        <Field
          name="HSC" 
          placeholder=" "
          className={style.textField}
        />
        <ErrorMessage name="HSC">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <br></br>


        <label htmlFor="hobbies">Hobbies</label>
        <Field
          name="hobbies"
          placeholder="  "
          className={style.textField}
        />
        <ErrorMessage name="hobbies">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <div className={style.buttons}>
          <button className={style.button} onClick={() => setStep(1)}>
            Previous
          </button>
          <button type="submit" className={style.button}>
            Next
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default Step2;
