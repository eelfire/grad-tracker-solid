import { createSignal, For } from "solid-js";

const Questionnaire = () => {
  const [interests, setInterests] = createSignal([
    { name: "linux", checked: false },
    { name: "web", checked: false },
    { name: "mobile", checked: false },
    { name: "game", checked: false },
    { name: "machine learning", checked: false },
    { name: "data science", checked: false },
    { name: "embedded", checked: false },
    { name: "iot", checked: false },
    { name: "cloud", checked: false },
    { name: "blockchain", checked: false },
    { name: "cyber security", checked: false },
  ]);
  return (
    <div class=" max-w-screen-2xl flex flex-col items-center m-auto">
      <form action="" class="flex flex-col w-6/12">
        <input
          class="p-2 m-4 border-2 rounded-lg"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />
        <input
          class="p-2 m-4 border-2 rounded-lg"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <div class="p-2 m-4">
          <label class="pr-3" for="branch">
            Select your branch
          </label>
          <select name="branch" id="branch">
            <option value="chemical">Chemical Engineering</option>
            <option value="civil">Civil Engineering</option>
            <option value="computer">Computer Science & Engineering</option>
            <option value="electrical">Electrical Engineering</option>
            <option value="material">Materials Engineering</option>
            <option value="mechanical">Mechanical Engineering</option>
            <option value="computer_dual">
              Computer Science & Engineering (B.Tech-M.Tech dual degree)
            </option>
            <option value="electrical_dual">
              Electrical Engineering (B.Tech-M.Tech dual degree)
            </option>
          </select>
        </div>
        <div class="p-2 m-4">
          <label class="pr-3" for="batch">
            Select your batch
          </label>
          <select name="batch" id="batch">
            <option value="18">B.Tech'18</option>
            <option value="19">B.Tech'19</option>
            <option value="20">B.Tech'20</option>
            <option value="21">B.Tech'21</option>
            <option value="22">B.Tech'22</option>
            <option value="23">B.Tech'23</option>
          </select>
        </div>
        <input
          class="p-2 m-4 border-2 rounded-lg"
          type="text"
          id="roll"
          name="roll"
          placeholder="Roll"
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
        <div class="m-4">
          Select your interests <br />
          <For each={interests()}>
            {(interest) => (
              <>
                <input
                  class="mr-2"
                  type="checkbox"
                  name="{interest.name}"
                  id="{interest.name}"
                />
                <label class="mr-6" for="{interest.name}">
                  {interest.name}
                </label>
              </>
            )}
          </For>
        </div>
        <input
          class="p-2 m-4 border-2 rounded-lg"
          type="text"
          id="skills"
          name="skills"
          placeholder="Enter your current skills"
        />
        <input
          class="p-2 m-4 border-2 rounded-lg"
          type="text"
          id="skills_goals"
          name="skills_goals"
          placeholder="Enter your skills goals"
        />
        <input
          class="p-2 m-4 border-2 rounded-lg bg-slate-100"
          type="submit"
          value="Save"
        />
      </form>
    </div>
  );
};

export default Questionnaire;
