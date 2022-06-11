import { Form, Formik, Field } from "formik";
import { InformationCircleIcon } from "@heroicons/react/outline";

import { earlyAccessSchema } from "validation";
import { Button } from "./button";
import { HStack, VStack } from "./stack";
import { Body, SubTitle } from "./typography";

const initialValues = {
  email: "",
};

const NewsletterForm = () => {
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    fetch("https://api.archetype.dev/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        signup_intent: "newsletter",
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          resetForm();
        }
      })
      .catch((err) => {})
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <VStack className="gap-10 w-full">
      <SubTitle>Sign up to our newsletter</SubTitle>
      <Body className="">
        Get the latest articles on all things data delivered straight to your
        inbox.
      </Body>
      <Formik
        initialValues={initialValues}
        validationSchema={earlyAccessSchema}
        onSubmit={onSubmit}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ errors }) => (
          <Form noValidate className="w-full">
            <HStack className="w-full">
              <Field
                name="email"
                type="email"
                id="email"
                placeholder="Write your Email"
                className={`w-full flex-1
      bg-[rgba(255,255,255,0.08)] rounded-lg rounded-br-none rounded-tr-none py-2 pl-4 `}
              />
              <Button
                onClick={() => {
                  toast({
                    title: "Thank you!",
                    description: "We will be in touch soon!",
                    status: "success",
                  });
                }}
                type="submit"
                size="s"
                className={`rounded-lg rounded-bl-none rounded-tl-none `}
              >
                Subscribe
              </Button>
            </HStack>
            {errors.email && (
              <HStack className="gap-2 mt-4">
                <InformationCircleIcon className="text-red-500 h-5 w-5" />
                <p className="text-red-500 text-sm"> {errors.email}</p>
              </HStack>
            )}
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export default NewsletterForm;
