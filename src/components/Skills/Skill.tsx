import { SkillProps } from "./Skill.type"

export const Skill = ({skills}: SkillProps) => {
  return (
    <>
        <ul>
            {skills.map((skill) => {
                return <li key={skill}>{skill}</li>
            }) }
        </ul>
    </>
  )
}
