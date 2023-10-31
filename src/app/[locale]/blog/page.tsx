import { Card, CardContent, Container, Paper, Stack, Typography } from '@mui/material'
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div>
      <br />
      {/* <Stack spacing={2} >
        <Link href={"blog/finding-your-perfect-pet"}>
          <Typography variant="h5" gutterBottom textAlign={'center'} fontWeight="bold">
            Finding your Perfect Pet
          </Typography>
        </Link>
        <Link href={"blog/shelter-adoption-misconception"}>
          <Typography variant="h5" gutterBottom textAlign={'center'} fontWeight="bold">
            Debunking Common Misconceptions About Pet Adoption
          </Typography>
        </Link>
      </Stack> */}
          <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <Container sx={{width: '90%', p: 2}}>
        <Paper elevation={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p style={{ textAlign: 'center' }}>{post.description}</p>}
        </article>
        </Paper>
        </Container>

        // <Card variant="outlined" sx={{ maxWidth: '90%', justifyContent: 'center' }}>
        //   <CardContent>
        //   <article key={post._id}>
        //   <Link href={post.slug}>
        //     <h2>{post.title}</h2>
        //   </Link>
        //   {post.description && <p>{post.description}</p>}
        // </article>
        //   </CardContent>
        // </Card>
      ))}
    </div>
    </div>
  )
}

export default Blog