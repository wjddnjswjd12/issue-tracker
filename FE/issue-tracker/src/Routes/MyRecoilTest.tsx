import { atom } from "@/Utils/MyRecoil/myRecoil";
import useMycoilState from "@/Utils/MyRecoil/useMycoilState";

const MyRecoilTest = () => {
  const countState = atom({ key: "count", default: 0 });
  const vocabList = atom({ key: "vocab", default: [] });
  const obj = atom({ key: "vocabObj", default: { id: 0, name: "jenny" } });

  const [count, setCount] = useMycoilState(countState);
  const [vocabs, setVocabs] = useMycoilState(vocabList);
  const [user, setUser] = useMycoilState(obj);

  return (
    <div>
      counter: {count}
      <button onClick={() => setCount(count + 1)}>up</button>
      <div>vocablist: {vocabs}</div>
      <button onClick={() => setVocabs(() => [...vocabs, "되나?"])}>
        눌러
      </button>
      <div>id: {user.id}</div>
      <div>name: {user.name}</div>
      <button onClick={() => setUser({ id: user.id + 1, name: "정원" })}>
        +
      </button>
    </div>
  );
};

export default MyRecoilTest;
