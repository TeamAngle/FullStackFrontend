import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/blogPost';
import { BlogPostService } from 'src/app/services/blog-post.service';

@Component({
  selector: 'app-search-blog',
  templateUrl: './search-blog.component.html',
  styleUrls: ['./search-blog.component.css']
})
export class SearchBlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  blogPostTitles: string[] = [];
  matchedBlogPosts: BlogPost[] = [];
  searchText: string;

  constructor(private blogPostService: BlogPostService) { }

  ngOnInit(): void {
    this.getBlogPosts()
  }

  getBlogPosts(){
    this.blogPostService.getBlogPosts().subscribe(
      blogPosts => {
        this.blogPosts = blogPosts;
        this.blogPostTitles = this.blogPosts.map(
          post => post.title
        )
      }
    
    )
  }

  getMatchedBlogPosts(){
    console.log('running matched blog posts')
    this.matchedBlogPosts = [];
    if(this.searchText.length == 0)
      return
    let searchTerms = this.searchText.trim().split(' ');
    console.log(searchTerms)
    for(let post of this.blogPostTitles){
      for(let term of searchTerms){
        if(post.toLowerCase().includes(term.toLowerCase())){
          this.matchedBlogPosts.push(this.blogPosts[this.blogPostTitles.indexOf(post)])
          console.log('found match')
          continue;
        }
      }
    }
  }

}
