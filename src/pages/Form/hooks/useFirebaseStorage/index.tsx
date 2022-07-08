import { UploadMetadata, ref, uploadBytes } from 'firebase/storage';

import { firebaseStorage } from '@/services';

export const useFirebaseStorage = () => {
  const handleUploadFile = async (
    file: File | Blob | ArrayBuffer | Uint8Array,
    reference: string,
    metadata?: UploadMetadata
  ) => {
    const storageRef = ref(firebaseStorage, reference);

    try {
      const snapshot = await uploadBytes(storageRef, file, metadata);
      return snapshot;
    } catch (err) {
      console.error(err);
    }
  };

  return { handleUploadFile };
};
