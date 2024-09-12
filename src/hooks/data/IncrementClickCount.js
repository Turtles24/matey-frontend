// Add this to the top of your component file
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase'; // firebase.js 파일 경로에 맞게 수정하세요.

async function incrementClickCount() {
  const clickDocRef = doc(db, 'clicks', 'buttonClick');

  // 먼저 기존의 클릭 수를 가져옵니다.
  const docSnap = await getDoc(clickDocRef);

  if (docSnap.exists()) {
    // 문서가 존재하면, 클릭 수를 업데이트합니다.
    const currentClicks = docSnap.data().clickCount || 0;
    await updateDoc(clickDocRef, {
      clickCount: currentClicks + 1,
    });
  } else {
    // 문서가 없으면, 새로운 클릭 수를 설정합니다.
    await setDoc(clickDocRef, {
      clickCount: 1,
    });
  }
}
