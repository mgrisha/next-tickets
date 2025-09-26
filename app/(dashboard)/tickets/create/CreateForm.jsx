import SubmitButton from "@/app/components/SubmitButton";
import { addTicket } from "../actions";

const CreateFrom = () => {
  return (
    <form className="w-1/2" action={addTicket}>
      <label>
        <span>Title:</span>
        <input type="text" required name="title" />
      </label>
      <label>
        <span>Body:</span>
        <textarea required name="body" />
      </label>
      <label>
        <span>Priority:</span>
        <select name="priority">
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <SubmitButton />
    </form>
  );
};

export default CreateFrom;
