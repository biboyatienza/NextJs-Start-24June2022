// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    name: 'biboyatienza/caIsBack',
    startedAt: '24.June.2022',
    canBeFoundAt: 'github' 
  })
}
