import { FormEvent, useRef, useState } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import { Modal } from "../Modal";
import Input from "../Input";

import { ModalEditFoodProps } from "../../types";

export const ModalEditFood: React.FC<ModalEditFoodProps> = ({
  isOpen,
  setIsOpen,
  editingFood,
  handleUpdateFood,
}): JSX.Element => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    handleUpdateFood({
      image,
      name,
      price,
      description,
    });
    setIsOpen();
  };

  const formRef = useRef(null);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
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

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};
