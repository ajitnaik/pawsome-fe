import { Card, CardContent, Container, Paper, Stack, Typography } from '@mui/material'
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div>
      <br />
          <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <Container sx={{width: '90%'}}>
        <Paper elevation={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2}}>
                    <article key={post._id}>
          <Link href={post.slug} style={{ textAlign: 'center' }}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p style={{ textAlign: 'center' }}>{post.description}</p>}
        </article>
        </Paper>
        </Container>
      ))}
    </div>
    </div>
  )
}

export default Blog