import React, { useState } from 'react';
import Modal from '../Modal';
import { z, ZodError } from "zod";
import FormTextInput from '../../Inputs/FormTextInput';
import { UploadIcon } from './UploadIcon';

export const AddProjectModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='w-4/5'>
      <Modal isOpen={isModalOpen} modalContent={<ModalContent closeModal={() => setIsModalOpen(false)} />} />
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
    </div>
  );
};

const schema = z.object({
  name: z.string().min(2),
  projectName: z.string().min(4),
  email: z.string().email(),
});

interface ModalContentProps {
  closeModal: any;
}

const ModalContent = ({ closeModal }: ModalContentProps) => {
  type FormErrors = {
    name?: string;
    projectName?: string;
    email?: string;
  };

  const [projectName, setProjectName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [repoLink, setRepoLink] = useState('');
  const [projectIcon, setProjectIcon] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleRepoLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepoLink(e.target.value);
  };

  const handleProjectDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectDescription(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const file = e.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setProjectIcon(reader.result as string);
      };
    }
  };

  const handleSubmit = () => {
    try {
      schema.parse({ name, projectName, email });
      setErrors({});
      //TODO Add logic behind this later
      console.log({ name, projectName, projectDescription, repoLink, email, projectIcon });
    } catch (error: any) {
      if (error instanceof ZodError) {
        const parsedErrors = {};

        for (const { path, message } of error.errors) {
          parsedErrors[path[0]] = message;
        }
        setErrors(parsedErrors);
      }
    }
  };

  return (
    <div className="p-4 mt-24 bg-[#0F1729] text-white dark:bg-gray-100 dark:text-black">
      <p className="text-xl font-bold mb-4 text-right">בקשה להוספת פרויקט</p>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 max-w-[1100px] flex-wrap">
        <FormTextInput
          placeholder="שם מלא *"
          value={name}
          onChange={handleNameChange}
          error={errors.name}
        />
        <FormTextInput
          placeholder="אימייל ליצירת קשר *"
          value={email}
          onChange={handleEmailChange}
          error={errors.email}
        />
        <FormTextInput
          placeholder="קישור לריפו"
          value={repoLink}
          onChange={handleRepoLinkChange}
        />
        <FormTextInput
          placeholder="שם הפרוייקט *"
          value={projectName}
          onChange={handleProjectNameChange}
          error={errors.projectName}
        />

      <div className='flex flex-row items-center'>
        <p className='text-2xl'>לוגו (אם יש)</p>
        <div className="ml-4 flex items-center bg-gray-700 dark:bg-gray-200 ">
          <div>

          <label 
          htmlFor="file-input" 
          className="cursor-pointer">

            <input
              id="file-input"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              />

          <div className='flex justify-center items-center rounded-md'>
            <UploadIcon />
          </div>
          </label>
            </div>
        </div>
        </div>

      </div>

      <div className="flex flex-col">
        <p className="text-xl font-bold mb-4 text-right">תיאור פרוייקט</p>
        <textarea
          className='h-56 bg-gray-700 dark:bg-gray-200 rounded-md'
          placeholder="טקסט חופשי"
          value={projectDescription}
          onChange={handleProjectDescriptionChange}
        />

        <div className="flex justify-around flex-wrap mt-1">
          <div className='flex justify-center'>
            <input className='' type='checkbox' />
            <p> קראתי ואני מסכימ/ה <span className='underline'>לתנאי השימוש והצהרת הפרטיות *</span></p>
          </div>
          <div className='flex gap-4'>

            <button onClick={closeModal}>ביטול</button>
            <button
              className="w-48 h-7 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              onClick={handleSubmit}
            >
              שליחה
            </button>
          </div>
        </div>
      </div>
      <p className='text-error mt-2'>על מנת לשלוח בקשה לפרויקט חדש, יש למלא את סעיף שם מלא, שם פרוייקט</p>
    </div>
  );
};