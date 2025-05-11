import { UploadMetadata, ref, uploadBytes } from 'firebase/storage';

import { firebaseStorage } from '@/lib/firebase';

export const useFirebaseStorage = () => {
  const handleUploadFile = async (
    file: File | Blob | ArrayBuffer | Uint8Array,
    url: string,
    metadata?: UploadMetadata
  ) => {
    try {
      const storageRef = ref(firebaseStorage, url);
      const snapshot = await uploadBytes(storageRef, file, metadata);
      return snapshot;
    } catch (err) {
      console.error(err);
    }
  };

  return { handleUploadFile };
};
