//app.component.ts
import {Component, OnInit} from '@angular/core'; // Importing OnInit hook
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	// Implementing OnInit
	constructor(private http: HttpClient) {}
	title = 'dog-api';
	ngOnInit() {
		// API Call
		let headers = new HttpHeaders({
			'x-rapidapi-host': 'timetable-lookup.p.rapidapi.com',
			'x-rapidapi-key': environment.Rapidkey
		});
		this.http
			.get<any>('https://timetable-lookup.p.rapidapi.com/codes/entertainment/', {
				headers: headers
			})
			.subscribe(data => {
				console.log(data);
			});
	}
}
