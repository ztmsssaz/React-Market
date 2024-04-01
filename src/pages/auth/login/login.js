import { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../../actions/authActions'
import { Spinner } from 'react-bootstrap'
import * as Yup from 'yup';

function Login() {
    const dispatch = useDispatch();
    // const navigate = useNavigate()
    const { loading, token } = useSelector(state => state.user)

    return (
        <>

            <div className="container">
                <div
                    id="loginFrom"
                    className="fadeInRight rad-12 light-shadow col-md-8 col-xl-6 mx-auto px-md-4"
                >
                    <h2 level={3} align="center">ورود</h2>
                    <div className="">
                        <Formik
                            initialValues={{
                                username: '',
                                password: '',
                            }}
                            validationSchema={Yup.object({
                                username:
                                    Yup.string()
                                        .max(50, 'حداکثر 50 حرف')
                                        .min(5, 'حداقل 5 حرف')
                                        .matches(/^[A-Za-z0-9_.]+$/, "فقط از حروف انگلیسی، اعداد و ._ استفاده کنید ")
                                        .required('اجباری'),
                                password: Yup.string()
                                    .required('اجباری'),
                            })}
                            onSubmit={(values) => {
                                dispatch(loginAction(values))
                            }}
                        >
                            <Form className="mb-2">
                                <div className="my-3">
                                    <label className="fs-12 my-1" htmlFor="username">نام کاربری
                                        <span className="text-danger"> * </span>
                                    </label>
                                    <Field
                                        className="form-control text-center py-2"
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="نام کاربری را وارد کنید"
                                        autoComplete="off"
                                    />
                                    <ErrorMessage
                                        className="text-danger"
                                        name="username"
                                        component="p"
                                    />
                                </div>
                                <div className="my-3">
                                    <label className="fs-12 my-1" htmlFor="password">رمز عبور
                                        <span className="text-danger"> * </span>
                                    </label>
                                    <div className="position-relative">
                                        <Field
                                            className="form-control text-center ltr py-2"
                                            type='password'
                                            id="password"
                                            name="password"
                                            placeholder=""
                                            autoComplete="off"
                                        />
                                    </div>

                                    <ErrorMessage
                                        className="text-danger"
                                        name="password"
                                        component="p"
                                    />
                                </div>
                                <div className="text-center col-md-8 col-xl-6 mx-auto">
                                    <button disabled={loading} className="btn btnPrimary w-100" type="submit">ورود</button>
                                </div>
                            </Form>
                        </Formik>
                        {loading ? <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> : null}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
