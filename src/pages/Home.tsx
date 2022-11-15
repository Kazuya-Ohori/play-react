import React, { useEffect } from "react";
import BigNumber from "bignumber.js";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MuiNumericField } from "@/features/form/MuiNumericFIeld";

import {
  TextField,
  Box,
  Button,
  FormHelperText,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import * as yup from "yup";

const schema = yup.object({
  price: yup.number().required(),
  amount: yup.number().required(),
});

type Inputs = yup.InferType<typeof schema>;

export const Home: React.FC = () => {
  const [result, setResult] = React.useState<Array<number>>([]);

  const { control, handleSubmit } = useForm<Inputs>({
    defaultValues: { price: 0 },
    resolver: yupResolver(schema), // yupを使用する場合は指定する
  });

  // フォーム送信時の処理
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // バリデーションチェックOK！なときに行う処理を追加
    console.log("data");
    console.log(data);
    const x = new BigNumber(data.price);
    const xy = new BigNumber(data.amount);
    const y = x.minus(xy).toNumber();
    console.log(x.minus(0.1).toNumber());
    const z = data.price - data.amount;
    // setResult(x.minus(data.amount));
    setResult([z, y]);
  };

  useEffect(() => {
    console.log("result");
    console.log(result);
  }, [result]);

  return (
    <>
      <Box component='form' noValidate>
        {/* <NumericFormat value={123456789} thousandSeparator={true} /> */}

        <MuiNumericField
          control={control}
          name='price'
          config={{
            displayErrorMessage: true,
            thousandSeparator: true,
          }}
          muiProps={{
            textFieldProps: {
              label: "金額",
              fullWidth: true,
            },
          }}
        />

        <MuiNumericField
          control={control}
          name='amount'
          config={{
            displayErrorMessage: true,
            thousandSeparator: true,
          }}
          muiProps={{
            textFieldProps: {
              label: "量",
              fullWidth: true,
            },
          }}
        />

        <Button onClick={handleSubmit(onSubmit)}>送信</Button>
      </Box>
      <Box sx={{ border: "2px solid #000" }}>
        {result.map((item: number, index) => (
          <Typography sx={{ color: "black" }} key={index}>
            {item}
          </Typography>
        ))}
      </Box>
    </>
  );
};
