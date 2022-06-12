import { useDisclosure } from "@chakra-ui/react";
import { Form, Formik, Field } from "formik";
import { InformationCircleIcon } from "@heroicons/react/outline";

import { earlyAccessSchema } from "validation";
import { Button } from "./button";
import EarlyAccessPopup from "./modal/EarlyAccessPopup";
import { HStack, VStack } from "./stack";

const initialValues = {
  email: "",
};

const EarlyAccessForm = ({ light = false }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    fetch("https://api.archetype.dev/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          resetForm();
          onOpen();
        }
      })
      .catch((err) => {})
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div>
      <EarlyAccessPopup isOpen={isOpen} onClose={onClose} />
      <Formik
        initialValues={initialValues}
        validationSchema={earlyAccessSchema}
        onSubmit={onSubmit}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ errors }) => (
          <Form noValidate>
            <VStack className="md:flex-row gap-4 md:gap-0 overflow-visible">
              <Field
                name="email"
                type="email"
                placeholder="Your Email"
                className={`w-[272px] md:w-max ${
                  light
                    ? "rgba(21, 21, 21, 0.08)"
                    : "bg-[rgba(255,255,255,0.08)]"
                }
            rounded-lg md:rounded-br-none md:rounded-tr-none py-2 pl-4 `}
              />
              <Button
                type="submit"
                size="s"
                className={`rounded-lg md:rounded-bl-none md:rounded-tl-none ${
                  light && "bg-dark-100 hover:!bg-primary !text-white"
                } `}
              >
                Request Early Access
              </Button>
            </VStack>
            {errors.email && (
              <HStack className="gap-2 mt-4">
                <InformationCircleIcon className="text-red-500 h-5 w-5" />
                <p className="text-red-500 text-sm"> {errors.email}</p>
              </HStack>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EarlyAccessForm;
