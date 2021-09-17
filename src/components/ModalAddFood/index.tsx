import { FormEvent, useRef, useState } from "react";

import { FiCheckSquare } from "react-icons/fi";
import { Form } from "./styles";

import { Modal } from "../Modal";
import Input from "../Input";

import { ModalAddFoodProps } from "../../types";

export const ModalAddFood: React.FC<ModalAddFoodProps> = ({
  isOpen,
  setIsOpen,
  handleAddFood,
}): JSX.Element => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    handleAddFood({
      image,
      name,
      price,
      description,
    });
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Cole o link aqui"
          icon={FiCheckSquare}
        />

        <Input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: Moda Italiana"
          icon={FiCheckSquare}
        />
        <Input
          name="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Ex: 19.90"
          icon={FiCheckSquare}
        />

        <Input
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição"
          icon={FiCheckSquare}
        />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};
