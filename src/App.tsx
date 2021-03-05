import React from "react";
import "./App.css";

import { Form, Select, Button, Input } from "antd";
import { Grid } from "@material-ui/core";
import AutoCompleteComponent from "./components/AutoComplete";

const { Option } = Select;

const suggestions = [
  {
    id: "1",
    label: "Lorena",
  },
  {
    id: "2",
    label: "Guará",
  },
  {
    id: "3",
    label: "Pinda",
  },
];

function App() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const validator = (value: any, val: any) => {
    const exists = suggestions.filter((e) => e.label === val.suggestion?.label);

    if (exists.length > 0) {
      return Promise.resolve();
    }

    return Promise.reject(new Error("Cidade não existe"));
  };

  return (
    <div
      className="App"
      style={{ padding: 10, display: "flex", flexDirection: "row" }}
    >
      <Grid
        item
        lg={4}
        style={{
          maxHeight: 480,
          overflow: "scroll",
          overflowX: "hidden",
          padding: 10,
        }}
      >
        <Form
          size="middle"
          layout="vertical"
          name="validate_other"
          scrollToFirstError={true}
          onFinish={onFinish}
          labelAlign="right"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            cidade: { suggestion: suggestions[0] },
          }}
        >
          <Grid container>
            <Grid item lg={12} xs={12}>
              <Form.Item
                label="Tipo de perfil"
                hasFeedback
                name="tipoPerfil"
                rules={[{ required: true }]}
              >
                <Input placeholder="Tipo de perfil" />
              </Form.Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item lg={6} xs={12}>
              <Form.Item
                label="Origem macro"
                hasFeedback
                name="origemMacro"
                rules={[{ required: true }]}
              >
                <Input placeholder="Origem macro" />
              </Form.Item>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Form.Item
                name="origemEspecifica"
                label="Origem Especifica"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please select your country!",
                  },
                ]}
              >
                <Select placeholder="Origem especifíca">
                  <Option value="china">China</Option>
                  <Option value="usa">U.S.A</Option>
                </Select>
              </Form.Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item lg={12} xs={12}>
              <Form.Item
                name="motivo"
                label="Motivo"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please select your country!",
                  },
                ]}
              >
                <Select placeholder="Motivo">
                  <Option value="china">China</Option>
                  <Option value="usa">U.S.A</Option>
                </Select>
              </Form.Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item lg={6} xs={12}>
              <Form.Item
                name="formaContrib"
                label="Forma de contribuição"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please select your country!",
                  },
                ]}
              >
                <Select placeholder="Forma de contribuição">
                  <Option value="china">China</Option>
                  <Option value="usa">U.S.A</Option>
                </Select>
              </Form.Item>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Form.Item
                name="tipoCorresp"
                label="Tipo de correspondência "
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please select your country!",
                  },
                ]}
              >
                <Select placeholder="Origem especifíca">
                  <Option value="china">China</Option>
                  <Option value="usa">U.S.A</Option>
                </Select>
              </Form.Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item lg={12} xs={12}>
              <Form.Item
                label="Valor"
                hasFeedback
                name="valor"
                rules={[{ required: true }]}
              >
                <Input placeholder="Valor" />
              </Form.Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item lg={6} xs={12}>
              <Form.Item
                label="Celular"
                hasFeedback
                name="celular"
                rules={[{ required: true }]}
              >
                <Input placeholder="Valor" />
              </Form.Item>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Form.Item
                label="WhatsApp"
                hasFeedback
                name="wpp"
                rules={[{ required: true }]}
              >
                <Input placeholder="Valor" />
              </Form.Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item lg={6} xs={12}>
              <Form.Item
                label="Telefone Fixo"
                hasFeedback
                name="telFixo"
                rules={[{ required: true }]}
              >
                <Input placeholder="Telefone Fixo" />
              </Form.Item>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Form.Item
                label="Telefone comercial"
                hasFeedback
                name="telComercial"
                rules={[{ required: true }]}
              >
                <Input placeholder="Telefone comercial" />
              </Form.Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item lg={12} xs={12}>
              <Form.Item
                label="E-mail"
                hasFeedback
                name="email"
                rules={[
                  { required: true },
                  {
                    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                    message: "Digite um e-mail valido",
                  },
                ]}
              >
                <Input placeholder="E-mail" />
              </Form.Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item lg={12} xs={12}>
              <Form.Item
                label="CEP"
                hasFeedback
                name="cep"
                rules={[{ required: true }]}
              >
                <Input placeholder="CEP" />
              </Form.Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item lg={6} xs={12}>
              <Form.Item
                name="uf"
                label="UF"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please select your country!",
                  },
                ]}
              >
                <Select placeholder="UF">
                  <Option value="china">China</Option>
                  <Option value="usa">U.S.A</Option>
                </Select>
              </Form.Item>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Form.Item
                name="cidade"
                label="Cidade"
                hasFeedback
                rules={[
                  {
                    validator: validator,
                  },
                ]}
              >
                <AutoCompleteComponent suggestions={suggestions} />
              </Form.Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item lg={12} xs={12}>
              <Form.Item
                label="Endereço"
                hasFeedback
                name="endereco"
                rules={[{ required: true }]}
              >
                <Input placeholder="Endereço" />
              </Form.Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item lg={6} xs={12}>
              <Form.Item label="Complemento" hasFeedback name="complemento">
                <Input disabled placeholder="Complemento" />
              </Form.Item>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Form.Item
                label="Bairro"
                hasFeedback
                name="bairro"
                rules={[{ required: true }]}
              >
                <Input placeholder="Bairro" />
              </Form.Item>
            </Grid>
          </Grid>

          <Form.Item
            wrapperCol={{
              span: 1,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Grid>

      <Grid item lg={6}></Grid>
    </div>
  );
}

export default App;
