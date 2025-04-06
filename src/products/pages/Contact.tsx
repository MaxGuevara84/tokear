import emailjs from "@emailjs/browser";
import { Button, Image, Input, Textarea } from "@nextui-org/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface FormInputs {
  user_name: string;
  user_email: string;
  user_message: string;
}

export const Contact = () => {
  const { control, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      user_name: "",
      user_email: "",
      user_message: "",
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    const templateParams = {
      ...data,
    };
    emailjs
      .send("service_s1qncon", "template_a9otchg", templateParams, {
        publicKey: "ArH-YIwGpDNSHpPHq",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    //  emailjs.sendForm('service_s1qncon', 'template_a9otchg', data, {
    //   publicKey: 'YOUR_PUBLIC_KEY',
    // })
    // .then(
    //   () => {
    //     console.log('SUCCESS!');
    //   },
    //   (error) => {
    //     console.log('FAILED...', error.text);
    //   },
    // );
  };

  return (
    <>
      {/* <Mailer /> */}
      <div className="w-full flex-col">
        <h1 className="text-2xl font-bold">Contáctame</h1>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-around items-center">
            <div className="flex-col w-[500px]">
              <Controller
                control={control}
                name="user_name"
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    value={field.value}
                    onChange={field.onChange}
                    className="mt-2"
                    type="text"
                    label="Name"
                  />
                )}
              />

              <Controller
                control={control}
                name="user_email"
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    value={field.value}
                    onChange={field.onChange}
                    className="mt-2"
                    type="text"
                    label="Email"
                  />
                )}
              />

              <Controller
                control={control}
                name="user_message"
                rules={{ required: true }}
                render={({ field }) => (
                  <Textarea
                    value={field.value}
                    onChange={field.onChange}
                    className="mt-2"
                    label="Nuevo Mensaje"
                  />
                )}
              />

              <br />
              <Button type="submit" className="mt-2" color="primary">
                Send
              </Button>
            </div>

            <div
              className="bg-white rounded-2xl p-10 flex items-center"
              style={{
                width: "500px",
                height: "600px",
              }}
            >
              <Image src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
