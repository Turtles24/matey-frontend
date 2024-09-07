import React from 'react';
import { LoadingCircle } from '../../../components/Icon/LoadingCircle';

export function Loading() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center align-middle">
          <LoadingCircle />
        </div>
      </div>
    </>
  );
}
