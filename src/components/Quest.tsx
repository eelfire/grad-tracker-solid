const Questionnaire = () => {
  return (
    <div class=" max-w-screen-2xl flex flex-col items-center m-auto">
      <h2>Questionnaire</h2>
      <form action="" class="flex flex-col w-6/12">
        <input
          class="p-2 m-4 border-2 rounded-lg"
          type="text"
          id="name"
          name="name"
          placeholder="name"
        />
        <input
          class="p-2 m-4 border-2 rounded-lg"
          type="email"
          id="email"
          name="email"
          placeholder="email"
        />
        <input
          class="p-2 m-4 border-2 rounded-lg"
          type="text"
          id="branch"
          name="branch"
          placeholder="branch"
        />
        <input
          class="p-2 m-4 border-2 rounded-lg"
          type="text"
          id="batch"
          name="batch"
          placeholder="batch"
        />
        <input
          class="p-2 m-4 border-2 rounded-lg"
          type="text"
          id="roll"
          name="roll"
          placeholder="roll"
        />
        <div>
          <input
            class="p-2 m-4"
            type="checkbox"
            id="branch_change"
            name="branch_change"
          />
          <label for="branch_change">Do you want change your branch?</label>
        </div>
        <div>
          <input
            class="p-2 m-4"
            type="checkbox"
            id="early_graduation"
            name="early_graduation"
          />
          <label for="early_graduation">
            Are you looking for early graduation?
          </label>
        </div>
        <div>
          <input
            class="p-2 m-4"
            type="checkbox"
            id="dual_majors"
            name="dual_majors"
          />
          <label for="dual_majors">Are you planning to do dual majors?</label>
        </div>
        <div>
          <input class="p-2 m-4" type="checkbox" id="honors" name="honors" />
          <label for="honors">Are you planning to do honors?</label>
        </div>
        <div>
          <input class="p-2 m-4" type="checkbox" id="minors" name="minors" />
          <label for="minors">Are you planning to do minors?</label>
        </div>
        <div class="p-2 m-4">
          <label class="pr-3" for="interests">
            Select your interests
          </label>
          <select name="interests" id="interests">
            <option value="interest1">interest1</option>
            <option value="interest2">interest2</option>
            <option value="interest3">interest3</option>
            <option value="interest4">interest4</option>
          </select>
        </div>
        <input
          class="p-2 m-4 border-2 rounded-lg"
          type="text"
          id="skills"
          name="skills"
          placeholder="skills"
        />
        <input
          class="p-2 m-4 border-2 rounded-lg"
          type="text"
          id="skills_goals"
          name="skills_goals"
          placeholder="skills_goals"
        />
      </form>
    </div>
  );
};

export default Questionnaire;
