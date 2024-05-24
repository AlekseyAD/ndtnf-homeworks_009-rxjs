import { of, from, timer, range, Observable } from 'rxjs';
import { first } from 'rxjs/operators';

const o = range(0, 10)

o.subscribe({
  next: (value: any) => console.log('Next:', value),
  complete: () => console.log('Complete!'),
  error: (error) => console.log('Error!', error)
})


// Задание 1. Сделайте обращение к GitHub API, как в примерах на лекции, с использованием RxJS.

const fetchingFunc = (observer) => {
    fetch('https://api.github.com/search/repositories?q=netology')
      .then(res => res.json())
      .then(value => observer.next(value));
  }
  
  const o2 = new Observable(fetchingFunc).pipe(first());
  
  o2.subscribe({
    next: (value: any) => console.log('Next:', value),
    complete: () => console.log('Complete!'),
    error: (error) => console.log('Error!', error)
  })
  
  // Задание 2. С использованием RxJS сделайте запросы к любому общедоступному API (например, аналогичное с GitHub API GitLab).
  
  // const fetchingFunc2 = (observer) => {
  //   fetch('https://gitlab.com/api/v4/projects?search=netology')
  //     .then(res => res.json())
  //     .then(value => observer.next(value));
  // }
  
  // const o3 = new Observable(fetchingFunc2).pipe(first());
  
  // o3.subscribe({
  //   next: (value: any) => console.log('Next:', value),
  //   complete: () => console.log('Complete!'),
  //   error: (error) => console.log('Error!', error)
  // })