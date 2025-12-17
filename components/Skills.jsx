const SKILLS = [
'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TailwindCSS', 'Node.js'
]


export default function Skills(){
return (
<section id="skills" className="py-8">
<h3 className="text-xl font-semibold text-center">Skills</h3>
<div className="mt-4 flex flex-wrap justify-center gap-3">
{SKILLS.map(s => (
<span key={s} className="px-3 py-1 border rounded-full text-sm">{s}</span>
))}
</div>
</section>
)
}